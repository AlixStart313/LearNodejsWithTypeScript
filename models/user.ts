import { DataTypes } from "sequelize";
import { connection } from "../utils/connection";

const conn = new connection();

const User = conn.connectionDB().define('User',{
   name:{
    type: DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    estatus:{
        type:DataTypes.BOOLEAN
        //aunque lo tenemos como tynint en la bs, podemos usarlo como boolean aqui
        // y el sequelize se encargara de trasnformarlo
    },
});

export default User;