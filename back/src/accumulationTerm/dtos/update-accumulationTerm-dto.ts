import { PartialType } from '@nestjs/mapped-types';
import { CreateAccumulationTermDto } from './create-accumulationTerm-dto';

export class UpdateAccumulationTermDto extends PartialType(CreateAccumulationTermDto) {}