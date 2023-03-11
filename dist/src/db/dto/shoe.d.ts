import { ShoeInput } from '../models/shoe';
export type CreateShoeDTO = ShoeInput;
export type UpdateShoeDTO = {
    id: number;
    data: Partial<ShoeInput>;
};
export type DeleteShoeDTO = {
    id: number;
};
