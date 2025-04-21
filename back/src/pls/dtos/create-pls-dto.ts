import { Transform, Type } from 'class-transformer';
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
  @IsString()
  plsDate: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  fe: number;
  @IsNotEmpty()
  @IsString()
  feUnit: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  ph: number;
  @IsNotEmpty()
  @IsString()
  phUnit: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  eh: number;
  @IsNotEmpty()
  @IsString()
  ehUnit: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  ec: number;
  @IsNotEmpty()
  @IsString()
  ecUnit: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  t: number;

  @IsNotEmpty()
  @IsString()
  tUnit: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  tss: number;
  @IsNotEmpty()
  @IsString()
  tssUnit: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  pb: number;
  @IsNotEmpty()
  @IsString()
  pbUnit: string;
}
