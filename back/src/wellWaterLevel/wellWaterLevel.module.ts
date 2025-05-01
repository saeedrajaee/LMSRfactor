import { Module } from '@nestjs/common';
import { WellWaterLevelService } from './wellWaterLevel.service';
import { WellWaterLevelController } from './wellWaterLevel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WellWaterLevelController],
  providers: [WellWaterLevelService],
})
export class WellWaterLevelModule {}
