import { Module } from '@nestjs/common';
import { PiezometerTempService } from './piezometerTemp.service';
import { PiezometerTempController } from './piezometerTemp.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule  ],
  controllers: [PiezometerTempController],
  providers: [PiezometerTempService],
})
export class PiezometerTempModule {}
