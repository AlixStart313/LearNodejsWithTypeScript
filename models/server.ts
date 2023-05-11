import express,{Application} from "express";


class Server{

    private app: Application;
    private port: string;

    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8000';
    }

    listen(){
        this.app.listen(this.port,()=> {
            console.log('Corriendo en el puerto 8000.....');
            
        })
    }

}

export default Server;