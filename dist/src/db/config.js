"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({
    path: '.config/postgres.env'
});
class Database {
    static get sequelize() {
        if (Database.conn !== null) {
            return Database.conn;
        }
        Database.conn = new sequelize_1.Sequelize({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
        });
        return Database.conn;
    }
}
Database.conn = null;
exports.default = Database;
//# sourceMappingURL=config.js.map