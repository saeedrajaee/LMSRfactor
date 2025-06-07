import { Module } from '@nestjs/common';
import { PlsService } from './pls.service';
import { PlsController } from './pls.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlsController],
  providers: [PlsService],
})
export class PlsModule {}
