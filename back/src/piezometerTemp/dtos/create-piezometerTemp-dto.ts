import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';

export class CreatePiezometerTempDto {
    @IsNotEmpty()
    @IsString()
    hipName: string;
    @IsNotEmpty()
    @IsString()
    piezometerName: string;

    @IsNotEmpty()
    @Type(() => Date)
    piezometerDate: Date;
    @IsNotEmpty()
    @Type(() => Number)
    piezometerTemp: number;
    @IsNotEmpty()
    @IsMongoId()
    tempUnit: string;
}