import { Module } from '@nestjs/common';
import { CopperConcentrationService } from './copperConcentration.service';
import { CopperConcentrationController } from './copperConcentration.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [CopperConcentrationController],
  providers: [CopperConcentrationService],
})
export class CopperConcentrationModule {}
