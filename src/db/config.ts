import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";

dotenv.config({
  path: '.config/postgres.env'
});

class Database {
  private static conn?: Sequelize = null;

  static get sequelize(): Sequelize {
    if (Database.conn !== null) {
      return Database.conn;
    }

    Database.conn = new Sequelize({
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

export default Database;
