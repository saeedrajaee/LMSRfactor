import { Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreatePiezometerAcidDto {
  @IsNotEmpty()
  @IsString()
  hipName: string;
  @IsNotEmpty()
  @IsString()
  piezometerName: string;
  @IsNotEmpty()
  @IsString()
  piezometerDate: string;
    @IsNotEmpty()
    @IsNumber()
    @Transform(({ value }) => {
        return Number(value);
      })
  piezometerAcidLevel: number;
  @IsNotEmpty()
  @IsString()
  piezometerAcidLevelUnit: string;
}
