import { IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUploadRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
