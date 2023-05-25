import express,{Application} from "express";
import  cors  from 'cors'
import userRouter from "../routes/usersRoutes";
import Connection from './../utils/connection';
import Pool from "./../utils/postgreSQLConection";


//import * as userRoutes from "../routes/usersRoutes";
import poolConnection from '../utils/postgreSQLConection';
//exporta todo el paquete y sera almacenado con ese nombre

const connection = new Connection();
const pool = new Pool();
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
       //this.DBConnection();
       this.PSConnection();
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

    

    PSConnection(){
        const psDB =  pool.Authentication();
        console.log(psDB);  
    }
        
    
   
}



export default Server;
