import express,{Application} from "express";
import userRouter from "../routes/usersRoutes";

//import * as userRoutes from "../routes/usersRoutes";
//exporta todo el paquete y sera almacenado con ese nombre


class Server{

    private app: Application;
    private port: string;
    private apiPaths ={
        usuarios: '/api/users'

    };

    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8000';
        //definimos las rutas
        this.routes();
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRouter)
    }

    listen(){
        this.app.listen(this.port,()=> {
            console.log('Corriendo en el puerto 8000.....');
            
        })
    }

}

export default Server;
