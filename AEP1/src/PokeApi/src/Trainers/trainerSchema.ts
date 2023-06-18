import { Schema, model } from "mongoose";

const Trainer = new Schema({
    name: String,
    team: []
})

export default model("trainer", Trainer);