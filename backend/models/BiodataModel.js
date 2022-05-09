import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Biodata = db.define(
    "biodata",
    {
        username: {
            type: DataTypes.STRING,
        },
        nama: {
            type: DataTypes.STRING,
        },
        alamat: {
            type: DataTypes.STRING,
        },
        umur: {
            type: DataTypes.INTEGER,
        },
        hobi: {
            type: DataTypes.STRING,
        },
        pendidikan: {
            type: DataTypes.STRING,
        },
        // CreatedAt: {
        //     type: DataTypes.DATE,
        // },
        // UpdatedAt: {
        //     type: DataTypes.DATE,
        // },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default Biodata;