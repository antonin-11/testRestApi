import { Model, Optional } from 'sequelize';
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
export interface ShoeInput extends Optional<ShoeAttributes, 'id'> {
}
export interface ShoeOuput extends Required<ShoeAttributes> {
}
declare class Shoe extends Model<ShoeAttributes, ShoeInput> implements ShoeAttributes {
    id: number;
    title: string;
    size: string;
    brand: string;
    price: string;
    state: string;
    rating: number;
    description: string;
    color: string;
    url: string;
    picture_url: string;
    platform: string;
    country: string;
    sold: boolean;
    date: Date;
    last_update: Date;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly deleted_at: Date;
}
export default Shoe;
