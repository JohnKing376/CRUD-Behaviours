import express from 'express';
import {sequelize}  from "./database/database"
import UserControllers from './Routes/usercontroller'

const app = express();
app.use(express.json())
app.use(UserControllers)

const PORT = process.env.PORT || 3000;

app.listen(PORT, async()=> {
    sequelize.sync()
    console.log(`App running on http://localhost:${PORT}`)
})