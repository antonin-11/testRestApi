import { IsNumber, IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class ShoeDto {
    @IsString() @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsString()
    @IsNotEmpty() 
    price: string;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsString()
    size: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    color: string;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsDate()
    @Type(() => Date)
    last_update: Date;

    @IsString()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    picture_url: string;
}

export class UrlDto {
    @IsString()
    @IsNotEmpty()
    url: string;
}
