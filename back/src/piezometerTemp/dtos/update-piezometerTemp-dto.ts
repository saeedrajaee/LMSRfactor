import { PartialType } from '@nestjs/mapped-types';
import { CreatePiezometerTempDto } from './create-piezometerTemp-dto';

export class UpdatePiezometerTempDto extends PartialType(CreatePiezometerTempDto) {}