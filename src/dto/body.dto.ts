import { IsNumber, IsString, IsNotEmpty, IsDate, isJSON, IsJSON } from 'class-validator';

export class BodyDto {
    @IsString() @IsNotEmpty()
    site: string;

    @IsString() @IsNotEmpty()
    body: string;

    @IsString() @IsNotEmpty()
    size: string;
}
