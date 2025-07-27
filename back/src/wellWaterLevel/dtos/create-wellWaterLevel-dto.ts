import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';

export class CreateWellWaterLevelDto {
    @IsNotEmpty()
    @IsMongoId()
    hipName: string

    @IsNotEmpty()
    @Type(() => Date)
    wellLevelDate: Date;
    @IsNotEmpty()
    @IsString()
    wellName:string
    @IsNotEmpty()
    @Type(() => Number)
    wellLevelHeight: number;
    @IsNotEmpty()
    @IsString()
    wellLevelUnit: string;
}