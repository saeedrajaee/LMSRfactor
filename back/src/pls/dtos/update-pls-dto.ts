import { PartialType } from '@nestjs/mapped-types';
import { CreatePlsDto } from './create-pls-dto';

export class UpdatePlsDto extends PartialType(CreatePlsDto) {}