import { Request,Response } from "express";
import {Query, QueryResult} from "pg";
import Pool from "../utils/postgreSQLConection";

const pool = new Pool();

export const getUsers =async (req:Request,res:Response) =>{
    const users: QueryResult= await pool.poolconection().query('SELECT * FROM users')
    res.json(users.rows)
}

export const getUser= async (req:Request,res:Response)=>{
 const {id} = req.params;
 const user= await pool.poolconection().query('SELECT * FROM users WHERE id=$1',[id])
    if(user){
        res.json(user.rows)
    }else{
        res.status(404).json({
            msg:`user with id ${id} doesn't exists`
        });
    }
}

export const postUser  = async (req:Request,res:Response)=>{
    const {name,email} = req.body;
    console.log(name,' ',email);
    
    try {
        const newUser = await pool.poolconection().query('INSERT INTO USERS(name,email,estatus) VALUES($1,$2,true)',[name,email])
        res.status(200).json({
            msg:'User registered succesfuly'
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({
            msg:'An error has occurred and the user could not be registered'
        })
        throw Error(String(e));
    }    
}

export const putUser  =async (req: Request,res : Response)=>{
    const {id} = req.params;
    const {name,email} = req.body;
    try {
        const User= await pool.poolconection().query('SELECT * FROM users WHERE id=$1',[id])
       
        if(!User){
            res.status(404).json({
                msg:`user with id ${id} doesn't exists`
            });
        }else{
            const user= await pool.poolconection().query('Update users set name = $1 , email = $2 where id=$3',[name,email,id]);
            res.status(200).json({
                msg:'User updatede succesfuly'
            })
        }  

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:`An error has occurred`
        });
    }
}

export const deleteUser  =async (req: Request,res : Response)=>{
    const {id} = req.params;
    try {
        const User= await pool.poolconection().query('SELECT * FROM users WHERE id=$1',[id])
        
        if(!User){
            res.status(404).json({
                msg:`user with id ${id} doesn't exists`
            });
        }else{
            const user= await pool.poolconection().query('delete from users where id = $1',[id])
            res.status(200).json({
                msg:`user deleted successfully`
            });
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:`An error has occurred`
        });
    }
}

export const enableOPrDisableUser  =async (req: Request,res : Response)=>{
    const {id} = req.params;
    try {
        const User= await pool.poolconection().query('SELECT * FROM users WHERE id=$1',[id])
        if(!User){
            res.status(404).json({
                msg:`user with id ${id} doesn't exists`
            });
        }else{
            const { estatus } = User.rows[0]
            console.log('103 ->',estatus);
            
            const user= await pool.poolconection().query('Update users set estatus = $1 where id=$2',[estatus,id]);
            res.json(user);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:`An error has occurred`
        });
    }
}
