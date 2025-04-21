import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCopperConcentrationDto {
    @IsNotEmpty()
    @IsString()
    hipName: string;
    @IsNotEmpty()
    @IsString()
    copConDate: string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    copCon: number;
    @IsNotEmpty()
    @IsString()
    copConUnit: string;
}