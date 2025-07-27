import { PartialType } from '@nestjs/mapped-types';
import { CreatePiezometerAcidDto } from './create-piezometerAcid-dto';

export class UpdatePiezometerAcidDto extends PartialType(CreatePiezometerAcidDto) {}