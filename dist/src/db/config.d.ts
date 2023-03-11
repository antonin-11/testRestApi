import { Sequelize } from 'sequelize';
declare class Database {
    private static conn?;
    static get sequelize(): Sequelize;
}
export default Database;
