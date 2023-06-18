import pokedexSchema from './pokedexSchema';
import { readFile, writeFile } from 'fs/promises'

class PokemonService {
    async getLinkPokemon() {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        const obj = await data.json();

        const links = obj.results.map((link) => {
            return link.url;
        })

        return links;
    }

    async getPokemonByLink() {
        const getData = await this.getLinkPokemon();
        const pokemonList = getData.map(async (link) => {
            const data = await fetch(link);
            const pokemon = await data.json();

            const pokemonMoves: any[] = [];

            while (pokemonMoves.length < 4) {
                let indice = Math.floor(Math.random() * pokemon.moves.length);

                if (!pokemonMoves.includes(pokemon.moves[indice].move.name)) {
                    pokemonMoves.push({ "name": pokemon.moves[indice].move.name });
                }
            }

            const allTypes = await pokemon.types.map((type) => {
                return { "name": type.type.name };
            })

            const allStats = await pokemon.stats.map((stats) => {
                return {
                    "name": stats.stat.name,
                    "base_stat": stats.base_stat
                }
            })

            const pokeData = {
                name: pokemon.forms[0].name,
                type: allTypes,
                stats: allStats,
                dex: pokemon.game_indices[9].game_index,
                height: pokemon.height,
                weight: pokemon.weight,
                moves: pokemonMoves,
                img: pokemon.sprites.front_default
            }
            return pokeData
        })


        const pokeListEsperada = await Promise.all(pokemonList)

        return pokeListEsperada;
    }

    async createPokedex() {
        const pokedex = await this.getPokemonByLink();
        await writeFile("pokedex.json", JSON.stringify(pokedex, null, 2));

        await pokedexSchema.insertMany(pokedex);
        this.groupPokemonByTypes();
    }

    async groupPokemonByTypes() {
        const pokedex = await JSON.parse(await readFile("pokedex.json", "utf-8"));

        const pokemonsBytypes = pokedex.reduce((pokemonTypes, pokemon) => {
            for (let i in pokemon.type) {
                if (pokemonTypes[pokemon.type[i].name] = pokemonTypes[pokemon.type[i].name] || []) {
                    pokemonTypes[pokemon.type[i].name].push(pokemon)
                }
            }

            return pokemonTypes
        }, {});

        await writeFile("pokemonsTypes.json", JSON.stringify(pokemonsBytypes, null, 2));
    }

    async findPokemon(nameParam: any) {
        const pokemon = await pokedexSchema.find({ name: nameParam });

        return pokemon;
    }

    async findPokemonByType(Type: any) {
        const pokemon = await pokedexSchema.find({name: Type});

        return pokemon;
    }

    async findPokemonByDexNumber(dexNumber: any) {
        const pokemon = await pokedexSchema.find({ dex: dexNumber });

        return pokemon;
    }
}





export default new PokemonService;