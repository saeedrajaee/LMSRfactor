import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCopperConcentrationDto {
    @IsNotEmpty()
    @IsString()
    hipName: string;
    @IsNotEmpty()
    @Type(() => Date)
    copConDate: Date;
    @IsNotEmpty()
    @IsNumber()
    copCon: number;
    @IsNotEmpty()
    @IsString()
    copConUnit: string;
}