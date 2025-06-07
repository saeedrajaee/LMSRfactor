import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';

export class CreatePiezometerTempDto {
    @IsNotEmpty()
    @IsString()
    hipName: string;
    @IsNotEmpty()
    @IsString()
    piezometerName: string;
    @IsNotEmpty()
    @IsString()
    piezometerTempDate: string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    piezometerTemp: number;
    @IsNotEmpty()
    @IsString()
    tempUnit: string;
}