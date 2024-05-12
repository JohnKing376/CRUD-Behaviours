import { Request, Response, Router } from "express";
import { newUser } from "../models/userModels";

const router = Router()

// GETTING ALL USERS
router.get('/users', async (req:Request, res:Response )=> {
    try{
        const Users = await newUser.findAll();
        res.json(Users);
    } catch (error) {
        console.error("Could not find any User", error)
       return res.status(400).json({error:"Internal Serval Error"})
    }
   
})

// CREATING A USER
router.post('/users', async (req:Request, res:Response )=> {
   try {
        const{id, name, age, displayName, attendanceToday } = req.body
        const user = await newUser.create({id,name,displayName,age,attendanceToday})
        return res.status(201).json({message: "User created successfully"});
    } catch (error) {
        console.error("Error creating user.", error);
        return res.status(400).json({
            message: "Internal Server Error",
        })
    }
})

// GETTING USER BY ID
router.get('/users/:id', async (req:Request, res:Response )=>{
    try {
        const findUserID = await newUser.findByPk(req.params.id)
        if(!findUserID)
            return res.status(404).send({error: "Error Finding user"})
        return res.status(200).send(findUserID)
    } catch (error) {
       console.error('Error getting User', error)
       return res.status(400).send({error: "Internal Server Error"})
    }
})

// UPDATING USER BY  USER-ID
router.put('/users/:id', async (req: Request, res:Response) => {
    try {
      const findUserID = await newUser.findByPk(req.params.id);
      if (!findUserID) 
        return res.status(404).json({ message: 'User not found' });
      const { name,displayName,age,attendanceToday} = req.body;
      await findUserID.update({ name, displayName, age, attendanceToday });
      return res.status(200).json(findUserID);
    } catch (error) {
        console.error('Error updating User', error)
        return res.status(400).send({error: "Internal Server Error"})
    }
});

// DELETING ONE USER
router.delete('/users/:id', async (req:Request, res:Response)=> {
    try {
        const findUserID = await newUser.findByPk(req.params.id);
      if (!findUserID) 
        return res.status(404).json({ message: 'User not found' });
      await findUserID.destroy()
      return res.status(200).send({message: "User destroyed"})
    } catch (error) {
        console.error('Error deleting User', error)
        return res.status(400).send({error: "Internal Server Error"})
    }
})

export default router


