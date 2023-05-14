import { Request,Response } from "express";
import User from "../models/user";

export const getUsers =async (req:Request,res:Response) =>{
    const users= await User.findAll();
    res.json(users)
}

export const getUser= async (req:Request,res:Response)=>{
 const {id} = req.params;
    const user = await User.findByPk(id);
    if(user){
        res.json(user)
    }else{
        res.status(404).json({
            msg:`user with id ${id} doesn't exists`
        });
    }
}

export const postUser  = async (req:Request,res:Response)=>{
    const {body} = req;
    console.log(body);
    
    try {
        const newUser = await User.create(body);
        res.json(newUser);
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
    const {body} = req;
    try {
        const user= await User.findByPk(id);
        if(!user){
            res.status(404).json({
                msg:`user with id ${id} doesn't exists`
            });
        }else{
            await user.update(body);
            res.json(user);
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
        const user= await User.findByPk(id);
        if(!user){
            res.status(404).json({
                msg:`user with id ${id} doesn't exists`
            });
        }else{
            await user.destroy()
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
        const user= await User.findByPk(id);
        if(!user){
            res.status(404).json({
                msg:`user with id ${id} doesn't exists`
            });
        }else{
            await user.update({estatus:!user.estatus})
            res.json(user);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:`An error has occurred`
        });
    }
}
