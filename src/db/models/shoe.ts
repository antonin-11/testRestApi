import { DataTypes, Model, Optional, NOW } from 'sequelize'

import Database from '../config';

export interface ShoeAttributes {
  id: number;
  title: string;
  size: string;
  brand: string;
  description?: string;
  color?: string;
  price: string;
  state: string;
  rating: number;
  url: string;
  picture_url: string;
  platform: string;
  country: string;
  sold: boolean;
  
  date: Date;
  last_update: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface ShoeInput extends Optional<ShoeAttributes, 'id'> {}
export interface ShoeOuput extends Required<ShoeAttributes> {}

class Shoe extends Model<ShoeAttributes, ShoeInput> implements ShoeAttributes {
  public id!: number;
  public title!: string;
  public size!: string;
  public brand!: string;
  public price!: string;
  public state!: string;
  public rating!: number;
  public description!: string;
  public color!: string;
  public url!: string;
  public picture_url!: string;
  public platform!: string;
  public country!: string;
  public sold!: boolean;
  
  public date!: Date;
  public last_update!: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
}

Shoe.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  last_update: {
    type: DataTypes.DATE,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  picture_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE, allowNull: true, defaultValue: NOW
  },
  updated_at: {
    type: DataTypes.DATE, allowNull: true, defaultValue: NOW
  },
  platform: {
    type: DataTypes.STRING, allowNull: true
  },
  country: {
    type: DataTypes.STRING, allowNull: true
  },
  sold : {
    type: DataTypes.BOOLEAN, defaultValue: false
  },
}, {
  timestamps: false,
  sequelize: Database.sequelize,
  paranoid: true,
  tableName: 'shoe'
})

export default Shoe;
