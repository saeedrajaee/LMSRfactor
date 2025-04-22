import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString,IsNumber } from 'class-validator';

export class CreateFlowDto {
    @IsNotEmpty()
    @IsString()
    hipName:  string;
    @IsNotEmpty()
    @IsString()
    flowDataIntDate: string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
    flowRate: number;
    @IsNotEmpty()
    @IsString()
    flowUnit: string;
    @IsNotEmpty()
    @IsString()
    pad: string;
}