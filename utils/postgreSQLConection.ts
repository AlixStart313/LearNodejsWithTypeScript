import {Pool,PoolClient} from "pg";


export class PoolConnection{
    private dbUser:string;
    private dbHost:string;
    private dbPassWord:string;
    private dbName:string;
    private port: number;
    private db:Pool | null;

    constructor(){
        this.dbUser=process.env.PSUSER || 'postgres'
        this.dbHost=process.env.PSHOST || 'localhost'
        this.dbPassWord=process.env.PSPASSWORD || 'root'
        this.dbName=process.env.PSDBNAME || 'prueba'
        this.port=5432
        this.db=null;

    }

    public poolconection():Pool{
        if(!this.db){
            this.db= new Pool({
                user:this.dbUser,
                host:this.dbHost,
                password:this.dbPassWord,
                database: this.dbName,
                port:this.port,

            });
        }
        return this.db;
    } 

    public  Authentication(): string {
        let message: string = 'Conexión exitosa a la base de datos';
        this.poolconection().connect((error: Error, client: PoolClient, release: () => void) => {
            if (error) {
              message='Error al conectar a la base de datos:', error;
              return;
            }
          
            message='Conexión exitosa a la base de datos';
            release();
          })
        return message;
      }
      
        

}


export  default PoolConnection;