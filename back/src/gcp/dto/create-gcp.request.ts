import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGcpRequest {
  @IsNotEmpty()
  @IsString()
  hipName: string;
  @IsNotEmpty()
  @IsString()
  gcpName: string;
  @IsNotEmpty()
  @Type(() => Number)
  gcpX: number;
  @IsNotEmpty()
  @Type(() => Number)
  gcpY: number;
  @IsNotEmpty()
  @Type(() => Number)
  gcpZ: number;
  @IsNotEmpty()
  @Type(() => Date)
  date: Date;
  @IsNotEmpty()
  @Type(() => Number)
  gcpHeight: number;

  @IsNotEmpty()
  @Type(() => Number)
  dDay: number;
  @IsNotEmpty()
  @Type(() => Number)
  dx: number;
  @IsNotEmpty()
  @Type(() => Number)
  dxR: number;
  @IsNotEmpty()
  @Type(() => Number)
  dxR1: number;
  @IsNotEmpty()
  @Type(() => Number)
  dy: number;
  @IsNotEmpty()
  @Type(() => Number)
  dyR: number;
  @IsNotEmpty()
  @Type(() => Number)
  dyR1: number;
  @IsNotEmpty()
  @Type(() => Number)
  dz: number;
  @IsNotEmpty()
  @Type(() => Number)
  dzR: number;
  @IsNotEmpty()
  @Type(() => Number)
  dzR1: number;
  @IsNotEmpty()
  @Type(() => Number)
  ds: number;
  @IsNotEmpty()
  @Type(() => Number)
  dsR: number;
  @IsNotEmpty()
  @Type(() => Number)
  dsR1: number;
  @IsNotEmpty()
  @Type(() => Number)
  dt: number;
  @IsNotEmpty()
  @Type(() => Number)
  dtR: number;
  @IsNotEmpty()
  @Type(() => Number)
  dtR1: number;
}