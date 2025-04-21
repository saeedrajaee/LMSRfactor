import { Module } from '@nestjs/common';
import { AccumulationTermService } from './accumulationTerm.service';
import { AccumulationTermController } from './accumulationTerm.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [AccumulationTermController],
  providers: [AccumulationTermService],
})
export class AccumulationTermModule {}
