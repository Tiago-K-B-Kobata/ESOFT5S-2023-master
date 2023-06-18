import { Trainer } from './trainerTypes';
import trainerSchema from './trainerSchema';
import pokedexServices from '../Pokedex/pokedexServices';

class TrainerService {

    async createTrainer(data: any) {
        const exist = await this.findTrainer(data.name)
        if(!exist.length){
            if(this.verifyTeam(data.team)){
                const Pokemonteam: any[] = await this.getPokemonsByNames(data.team)
                const trainerTeam = {
                    "name": data.name,
                    "team": Pokemonteam
                }
                await trainerSchema.create(trainerTeam);
    
                return trainerTeam;
            }else{
                return "Time deve conter 5 pokemons!"
            }
        }else{
            return "Treinador já cadastrado!"
        }
    }

    async getAllTrainer() {
        const allTrainer = await trainerSchema.find();

        return allTrainer;
    }

    async findTrainer(nameParam: any) {
        const trainer = await trainerSchema.find({ name: nameParam })

        return trainer;
    }

    async updateTrainer(nameParam: any, updateData: any) {
        const PokemonTeam: any[] = await this.getPokemonsByNames(updateData.team);
        const trainerTeam = {
            "team": PokemonTeam
        }
        const trainer = await trainerSchema.findOneAndUpdate(
            { name: nameParam.trainer },  trainerTeam, { new: true })

        return trainer;
    }

    async getPokemonsByNames(pokemonNames: any[]){
        const pokemons = pokemonNames.map(async (pokemon) => {
            const pokemonData = await pokedexServices.findPokemon(pokemon.name);

            return pokemonData[0];
        })
        const team = await Promise.all(pokemons);
        return team;
    }


    async deleteTrainer(nameParam: any){
        await trainerSchema.findOneAndDelete({ name: nameParam })
    }

    verifyTeam(team: any[]){
        return team.length === 5 ? true : false; 
    }
}



export default new TrainerService;