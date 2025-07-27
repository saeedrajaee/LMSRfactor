import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';

export class CreateAccumulationTermDto {
    // @IsNotEmpty()
    @IsString()
    hipName:  string;
    // @IsNotEmpty()
    // @Type(() => Number)
    @IsNumber()
    flowIn: number;
    // @IsNotEmpty()
    @IsString()
    flowUnitIn: string;
    // @IsNotEmpty()
    @IsNumber()
    flowOut: number;
    // @IsNotEmpty()
    @IsString()
    flowUnitOut: string;
    // @IsNotEmpty()
    @IsString()
    accumulationDate: string;
    // @IsNotEmpty()
    @IsNumber()
    accumulationTerm: number;
}