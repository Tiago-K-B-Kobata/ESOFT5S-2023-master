import pokedexServices from "../Pokedex/pokedexServices";

class pokeController{
    async createPokedex(req, res){
        await pokedexServices.createPokedex();

        return res.status(201).send('Pokedex criada!');
    }

    async findPokemon(req, res){
        const Pokemon = await pokedexServices.findPokemon(req.params.name);

        return res.status(200).send(Pokemon);
    }

    async findPokemonByType(req, res){
        const Pokemon = await pokedexServices.findPokemonByType(req.params.type);

        return res.status(200).send(Pokemon);
    }

    async findPokemonByDexNumber(req, res){
        const Pokemon = await pokedexServices.findPokemonByDexNumber(req.params.dex);

        return res.status(200).send(Pokemon);
    }
}

export default new pokeController;