import {Sequelize} from 'sequelize'


export class connection{
    private dbName:string;
    private dbUser:string;
    private dbPassWord:string;
    private db: Sequelize | null;

    constructor(){
        this.dbName=process.env.BDNAME || 'node';
        this.dbUser=process.env.DBUSER || 'root'
        this.dbPassWord=process.env.DBPASSWORD || 'root';
        this.db = null;
    }


    public connectionDB(): Sequelize {
        if (!this.db) {
          this.db = new Sequelize(this.dbName, this.dbUser, this.dbPassWord, {
            host: 'localhost',
            dialect: 'mysql',
            // para fines educativos lo hemos quitado por que deseamos ver los querys que se ejecutan
            // logging:false,
          });
        }
        return this.db;
      }
    
}

export default connection;


