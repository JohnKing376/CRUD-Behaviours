import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database"


// DEFINED USER STRUCTURE
export const newUser = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: DataTypes.STRING,
    },
    age: {
        type:DataTypes.INTEGER,
        defaultValue: 18,
    },
    attendanceToday : {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});