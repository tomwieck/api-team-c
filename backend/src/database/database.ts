import { Dialect, Sequelize } from "sequelize";
import * as dotenv from "dotenv";

 const  dbConnString = (process.env.NODE_ENV === 'production') ?
        `${(process.env.DB_DIALECT as Dialect) ?? 'postgres'}:${process.env.DB_USERNAME ??'MISSING_DB_USERNAME_CONFIG'}`+
        `:${process.env.DB_PASSWORD ??'MISSING_DB_PASSWORD_CONFIG'}@${process.env.DB_HOST ?? 'MISSING_DB_HOST_CONFIG'}`+
        `/${process.env.DB_NAME ??'MISSING_DB_NAME_CONFIG'}`
     : "sqlite::memory:";

export const dbDatabase = new Sequelize(dbConnString);

