import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateGcpRequest {
  @IsNotEmpty()
  @IsString()
  hipName: string;
  @IsNotEmpty()
  @IsString()
  gcpName: string;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  gcpX: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  gcpY: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  gcpZ: number;
  @IsNotEmpty()
 @IsString()
  date: string;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  gcpHeight: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dDay: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dx: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dxR: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dxR1: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dy: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dyR: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dyR1: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dz: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dzR: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dzR1: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  ds: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dsR: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dsR1: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dt: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dtR: number;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
      return Number(value);
    })
  dtR1: number;
}