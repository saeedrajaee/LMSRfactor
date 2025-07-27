import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreateAccumulationTermDto } from './dtos/create-accumulationTerm-dto';
import { UpdateAccumulationTermDto } from 'src/accumulationTerm/dtos/update-accumulationTerm-dto';
import { AccumulationTermService } from './accumulationTerm.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('accumulationTerm')
export class AccumulationTermController {
  constructor(private readonly accumulationTermService: AccumulationTermService) {}

  @Post()
  createAccumulationTerm(@Body() request: CreateAccumulationTermDto) {
    return this.accumulationTermService.createAccumulationTerm(request);
  }

  @Get()
  async getAccumulationTerms() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.accumulationTermService.getAccumulationTerms();
  }
  @Get(':accumulationTermId')
  async getAccumulationTermType(@Param('accumulationTermId') accumulationTermId: string) {
    return this.accumulationTermService.getAccumulationTerm(+accumulationTermId);
  }

  @Patch(':accumulationTermId')
  async updateAccumulationTerm(
    @Param('accumulationTermId') accumulationTermId: string,
    @Body() updateAccumulationTermDto: UpdateAccumulationTermDto,
  ) {
    return this.accumulationTermService.updateAccumulationTerm(+accumulationTermId, updateAccumulationTermDto);
  }

  @Delete(':accumulationTermId')
  async deleteAccumulationTerm(@Param('accumulationTermId') accumulationTermId: string) {
    return this.accumulationTermService.deleteAccumulationTerm(+accumulationTermId);
  }
}