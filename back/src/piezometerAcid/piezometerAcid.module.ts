import { Module } from '@nestjs/common';
import { PiezometerAcidService } from './piezometerAcid.service';
import { PiezometerAcidController } from './piezometerAcid.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PiezometerAcidController],
  providers: [PiezometerAcidService],
})
export class PiezometerAcidModule {}
