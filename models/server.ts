import express,{Application} from "express";
import userRouter from "../routes/usersRoutes";
import  cors  from 'cors'
import Connection from './../utils/connection';


//import * as userRoutes from "../routes/usersRoutes";
//exporta todo el paquete y sera almacenado con ese nombre

const connection = new Connection();
class Server{
    private app: Application;
    private port: string;
    private apiPaths ={
        usuarios: '/api/users'

    };
    constructor(){
        this.app=express();
        this.port=process.env.PORT || '8000';

        this.middlewares();
        //definimos las rutas
        this.DBConnection();
        this.routes();
        
        
    }

    middlewares(){
        this.app.use(cors() );
        this.app.use(express.json() );
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRouter)
    }

    listen(){
        this.app.listen(this.port,()=> {
            console.log('Corriendo en el puerto',process.env.PORT);   
        })
    }

    async DBConnection() {
        try {
          const db = connection.connectionDB().authenticate();
          console.log('Database is connected and working...');
    
        } catch (e) {
            throw new Error(String(e));
            console.error(e);
          
        }
      }
}



export default Server;
