import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreateCopperConcentrationDto } from './dtos/create-copperConcentration-dto';
import { UpdateCopperConcentrationDto } from './dtos/update-copperConcentration-dto';
import { CopperConcentrationService } from './copperConcentration.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('copperConcentration')
export class CopperConcentrationController {
    constructor(private readonly copperConcentrationService: CopperConcentrationService) {}

    @Post()
    async createCopperConcentration(
      @Body() body: CreateCopperConcentrationDto,
      // @CurrentUser() user: TokenPayload,

    ) {
      // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
      return this.copperConcentrationService.createCopperConcentration(body);
    }
  
    @Get()
    async getCopperConcentrations() {
      // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
      return this.copperConcentrationService.getCopperConcentrations();
    }
    @Get(':copperConcentrationId')
    async getCopperConcentrationType(@Param('copperConcentrationId') copperConcentrationId: string) {
      return this.copperConcentrationService.getCopperConcentration(+copperConcentrationId);
    }
  
    @Patch(':copperConcentrationId')
    async updateCopperConcentration(
      @Param('copperConcentrationId') copperConcentrationId: string,
      @Body() updateCopperConcentrationDto: UpdateCopperConcentrationDto,
    ) {
      return this.copperConcentrationService.updateCopperConcentration(+copperConcentrationId, updateCopperConcentrationDto);
    }
  
    @Delete(':copperConcentrationId')
    async deleteCopperConcentration(@Param('copperConcentrationId') copperConcentrationId: string) {
      return this.copperConcentrationService.deleteCopperConcentration(+copperConcentrationId);
    }
}