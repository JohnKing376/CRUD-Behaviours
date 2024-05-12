import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./storage/database.sqlite",
})


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});