import { Sequelize } from "sequelize";

export const dbCache = new Sequelize("sqlite::memory:");