import app from "./app";

function main(){
    try{
        app.listen(3000, 'localhost', async() =>{
            console.log("Starting Server at port 3000");
        })
    }catch(err){
        console.error("Starting Server Error", err);
    }
}

main();