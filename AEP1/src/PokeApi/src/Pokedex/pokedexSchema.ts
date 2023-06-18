import {Schema, model} from 'mongoose';

const PokedexSchema = new Schema({
    name: String,
    type: [],
    stats: [], 
    dex: Number, 
    height: Number, 
    weight: Number,
    moves: []
})

export default model('pokedex', PokedexSchema);