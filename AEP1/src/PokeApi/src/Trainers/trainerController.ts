import trainersServices from "./trainersServices";

class pokeController{

    async createTrainer(req, res){
        try{
            const createdTrainer = await trainersServices.createTrainer(req.body);
            return res.status(201).send(createdTrainer);
        }catch(err){
            throw new Error(err);
        }

    }

    async findTrainer(req, res){
        const trainer = await trainersServices.findTrainer(req.params.trainer);
        return res.status(200).send(trainer);
    }

    async getAllTrainer(req, res){
        const trainer = await trainersServices.getAllTrainer();
        return res.status(200).send(trainer);
    }

    async updateTrainer(req, res){
        try{
            const trainer = await trainersServices.updateTrainer(req.params, req.body);
            return res.status(200).send(trainer);
        }catch(err){
            throw new Error(err);
        }
    }

    async deleteTrainer(req, res){
        try{
            await trainersServices.deleteTrainer(req.params.trainer);
            return res.status(200).send("Treinador deletado com sucesso");
        }catch(err){
            throw new Error(err);
        }
    }
}

export default new pokeController;