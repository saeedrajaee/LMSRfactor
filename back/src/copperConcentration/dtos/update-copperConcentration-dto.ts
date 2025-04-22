import { PartialType } from '@nestjs/mapped-types';
import { CreateCopperConcentrationDto } from './create-copperConcentration-dto';

export class UpdateCopperConcentrationDto extends PartialType(CreateCopperConcentrationDto) {}