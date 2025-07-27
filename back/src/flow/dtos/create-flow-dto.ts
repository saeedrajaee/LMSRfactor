import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsMongoId,IsDate,IsNumber } from 'class-validator';

export class CreateFlowDto {
    @IsNotEmpty()
    @IsString()
    hipName:  string;
    @IsNotEmpty()
    @Type(() => Date)
    flowDataIntDate: Date;
    @IsNotEmpty()
    @IsNumber()
    flowRate: number;
    @IsNotEmpty()
    @IsString()
    flowUnit: string;
    @IsNotEmpty()
    @IsString()
    pad: string;
}