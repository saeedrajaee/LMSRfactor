import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreatePlsDto {
  @IsNotEmpty()
  @IsString()
  hipName: string;
  @IsNotEmpty()
  @Type(() => Date)
  plsDate: Date;

  @IsNotEmpty()
  @Type(() => Number)
  fe: number;
  @IsNotEmpty()
  @IsString()
  feUnit: string;

  @IsNotEmpty()
  @Type(() => Number)
  ph: number;
  @IsNotEmpty()
  @IsString()
  phUnit: string;

  @IsNotEmpty()
  @Type(() => Number)
  eh: number;
  @IsNotEmpty()
  @IsString()
  ehUnit: string;

  @IsNotEmpty()
  @Type(() => Number)
  ec: number;
  @IsNotEmpty()
  @IsString()
  ecUnit: string;

  @IsNotEmpty()
  @Type(() => Number)
  t: number;

  @IsNotEmpty()
  @IsString()
  tUnit: string;

  @IsNotEmpty()
  @Type(() => Number)
  tss: number;
  @IsNotEmpty()
  @IsString()
  tssUnit: string;

  @IsNotEmpty()
  @Type(() => Number)
  pb: number;
  @IsNotEmpty()
  @IsString()
  pbUnit: string;
}
