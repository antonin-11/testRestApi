"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
class Shoe extends sequelize_1.Model {
}
Shoe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    brand: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    last_update: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    picture_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: sequelize_1.NOW
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE, allowNull: true, defaultValue: sequelize_1.NOW
    },
    platform: {
        type: sequelize_1.DataTypes.STRING, allowNull: true
    },
    country: {
        type: sequelize_1.DataTypes.STRING, allowNull: true
    },
    sold: {
        type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false
    },
}, {
    timestamps: false,
    sequelize: config_1.default.sequelize,
    paranoid: true,
    tableName: 'shoe'
});
exports.default = Shoe;
//# sourceMappingURL=shoe.js.map