import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';

export class CreateWellWaterLevelDto {
    @IsNotEmpty()
    @IsString()
    hipName: string

    @IsNotEmpty()
    @IsString()
    wellLevelDate: string;

    @IsNotEmpty()
    @IsString()
    wellName:string

    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    wellLevelHeight: number;
    @IsNotEmpty()
    @IsString()
    wellLevelUnit: string;
}