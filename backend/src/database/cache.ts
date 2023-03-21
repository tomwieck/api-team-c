import { Sequelize } from "sequelize";

export const dbCache = new Sequelize("sqlite::memory:", { logging: (process.env.DB_LOGGING?.toUpperCase() === 'ON') });