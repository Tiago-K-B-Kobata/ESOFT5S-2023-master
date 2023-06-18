import { Router } from "express";
import pokedexController from "./Pokedex/pokedexController"; 
import trainerController from "./Trainers/trainerController"; 
const routes = Router();

//Pokedex Routes
routes.post('/pokedex', pokedexController.createPokedex);
routes.get('/pokemon/:name', pokedexController.findPokemon);
routes.get('/pokemonByType/:type', pokedexController.findPokemonByDexNumber);
routes.get('/pokemonByDexNumber/:dex', pokedexController.findPokemonByDexNumber);

//Trainer Routes
routes.post('/trainer', trainerController.createTrainer);
routes.get('/trainer', trainerController.getAllTrainer);
routes.get('/trainer/:trainer', trainerController.findTrainer);
routes.put('/updateTrainer/:trainer', trainerController.updateTrainer);
routes.delete('/deleteTrainer/:trainer', trainerController.deleteTrainer);

export default routes