import { PartialType } from '@nestjs/mapped-types';
import { CreateWellWaterLevelDto } from './create-wellWaterLevel-dto';

export class UpdateWellWaterLevelDto extends PartialType(CreateWellWaterLevelDto) {}