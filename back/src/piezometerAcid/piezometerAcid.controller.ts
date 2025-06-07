import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreatePiezometerAcidDto } from './dtos/create-piezometerAcid-dto';
import { UpdatePiezometerAcidDto } from './dtos/update-piezometerAcid-dto';
import { PiezometerAcidService } from './piezometerAcid.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('piezometerAcid')
export class PiezometerAcidController {
  constructor(private readonly piezometerAcidService: PiezometerAcidService) {}

  @Post()
  async createPiezometerAcid(
    @Body() body: CreatePiezometerAcidDto,
    // @CurrentUser() user: TokenPayload,

  ) {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.piezometerAcidService.createPiezometerAcid(body);
  }

  @Get()
  async getPiezometerAcids() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.piezometerAcidService.getPiezometerAcids();
  }
  @Get(':piezometerAcidId')
  async getPiezometerAcidType(@Param('piezometerAcidId') piezometerAcidId: string) {
    return this.piezometerAcidService.getPiezometerAcid(+piezometerAcidId);
  }

  @Patch(':piezometerAcidId')
  async updatePiezometerAcid(
    @Param('piezometerAcidId') piezometerAcidId: string,
    @Body() updatePiezometerAcidDto: UpdatePiezometerAcidDto,
  ) {
    return this.piezometerAcidService.updatePiezometerAcid(+piezometerAcidId, updatePiezometerAcidDto);
  }

  @Delete(':piezometerAcidId')
  async deletePiezometerAcid(@Param('piezometerAcidId') piezometerAcidId: string) {
    return this.piezometerAcidService.deletePiezometerAcid(+piezometerAcidId);
  }
}
