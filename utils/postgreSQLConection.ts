import {Pool} from "pg";

const poolConnection=new Pool({
    user:'postgres',
    host:'localhost',
    password:'root',
    database:'prueba',
    port:5432
});

export  default poolConnection;