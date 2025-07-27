import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreatePlsDto } from './dtos/create-pls-dto';
import { UpdatePlsDto } from './dtos/update-pls-dto';
import { PlsService } from './pls.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('pls')
export class PlsController {
  constructor(private readonly plsService: PlsService) {}

  @Post()
  async createPls(
    @Body() body: CreatePlsDto,
    // @CurrentUser() user: TokenPayload,

  ) {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.plsService.createPls(body);
  }

  @Get()
  async getPlss() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.plsService.getPlss();
  }
  @Get(':plsId')
  async getPlsType(@Param('plsId') plsId: string) {
    return this.plsService.getPls(+plsId);
  }

  @Patch(':plsId')
  async updatePls(
    @Param('plsId') plsId: string,
    @Body() updatePlsDto: UpdatePlsDto,
  ) {
    return this.plsService.updatePls(+plsId, updatePlsDto);
  }

  @Delete(':plsId')
  async deletePls(@Param('plsId') plsId: string) {
    return this.plsService.deletePls(+plsId);
  }
}