import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreateWellWaterLevelDto } from './dtos/create-wellWaterLevel-dto';
import { UpdateWellWaterLevelDto } from './dtos/update-wellWaterLevel-dto';
import { WellWaterLevelService } from './wellWaterLevel.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('wellWaterLevel')
export class WellWaterLevelController {
  constructor(private readonly wellWaterLevelService: WellWaterLevelService) {}

  @Post()
  async createWellWaterLevel(
    @Body() body: CreateWellWaterLevelDto,
    // @CurrentUser() user: TokenPayload,

  ) {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.wellWaterLevelService.createWellWaterLevel(body);
  }

  @Get()
  async getWellWaterLevels() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.wellWaterLevelService.getWellWaterLevels();
  }
  @Get(':wellWaterLevelId')
  async getWellWaterLevelType(@Param('wellWaterLevelId') wellWaterLevelId: string) {
    return this.wellWaterLevelService.getWellWaterLevel(+wellWaterLevelId);
  }

  @Patch(':wellWaterLevelId')
  async updateWellWaterLevel(
    @Param('wellWaterLevelId') wellWaterLevelId: string,
    @Body() updateWellWaterLevelDto: UpdateWellWaterLevelDto,
  ) {
    return this.wellWaterLevelService.updateWellWaterLevel(+wellWaterLevelId, updateWellWaterLevelDto);
  }

  @Delete(':wellWaterLevelId')
  async deleteWellWaterLevel(@Param('wellWaterLevelId') wellWaterLevelId: string) {
    return this.wellWaterLevelService.deleteWellWaterLevel(+wellWaterLevelId);
  }
}
