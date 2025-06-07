import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString,IsNumber } from 'class-validator';

export class CreateAccumulationTermDto {
    @IsNotEmpty()
    @IsString()
    hipName:  string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    flowIn: number;
    @IsNotEmpty()
    @IsString()
    flowUnitIn: string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    flowOut: number;
    @IsNotEmpty()
    @IsString()
    flowUnitOut: string;
    @IsNotEmpty()
    @IsString()
    accumulationDate: string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    accumulationTerm: number;
}