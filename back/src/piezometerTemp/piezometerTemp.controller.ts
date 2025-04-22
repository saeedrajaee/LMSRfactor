import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreatePiezometerTempDto } from './dtos/create-piezometerTemp-dto';
import { UpdatePiezometerTempDto } from './dtos/update-piezometerTemp-dto';
import { PiezometerTempService } from './piezometerTemp.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('piezometerTemp')
export class PiezometerTempController {
  constructor(private readonly piezometerTempService: PiezometerTempService) {}

  @Post()
  async createPiezometerTemp(
    @Body() body: CreatePiezometerTempDto,
    // @CurrentUser() user: TokenPayload,

  ) {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.piezometerTempService.createPiezometerTemp(body);
  }

  @Get()
  async getPiezometerTemps() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.piezometerTempService.getPiezometerTemps();
  }
  @Get(':piezometerTempId')
  async getPiezometerTempType(@Param('piezometerTempId') piezometerTempId: string) {
    return this.piezometerTempService.getPiezometerTemp(+piezometerTempId);
  }

  @Patch(':piezometerTempId')
  async updatePiezometerTemp(
    @Param('piezometerTempId') piezometerTempId: string,
    @Body() updatePiezometerTempDto: UpdatePiezometerTempDto,
  ) {
    return this.piezometerTempService.updatePiezometerTemp(+piezometerTempId, updatePiezometerTempDto);
  }

  @Delete(':piezometerTempId')
  async deletePiezometerTemp(@Param('piezometerTempId') piezometerTempId: string) {
    return this.piezometerTempService.deletePiezometerTemp(+piezometerTempId);
  }
}