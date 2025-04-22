import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreateFlowDto } from './dtos/create-flow-dto';
import { UpdateFlowDto } from './dtos/update-flow-dto';
import { FlowService } from './flow.service';
// import { CurrentUser } from 'src/auth/current-user.decorator';
// import { TokenPayload } from 'src/auth/token-payload.interface';

@Controller('flow')
export class FlowController {
  constructor(private readonly flowService: FlowService) {}

  @Post()
  async createFlow(
    @Body() body: CreateFlowDto,
    // @CurrentUser() user: TokenPayload,

  ) {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.flowService.createFlow(body);
  }

  @Get()
  async getFlows() {
    // console.log("teeeeeeeeeeeeeeeeeeeeeeeeest")
    return this.flowService.getFlows();
  }
  @Get(':flowId')
  async getFlowType(@Param('flowId') flowId: string) {
    return this.flowService.getFlow(+flowId);
  }

  @Patch(':flowId')
  async updateFlow(
    @Param('flowId') flowId: string,
    @Body() updateFlowDto: UpdateFlowDto,
  ) {
    return this.flowService.updateFlow(+flowId, updateFlowDto);
  }

  @Delete(':flowId')
  async deleteFlow(@Param('flowId') flowId: string) {
    return this.flowService.deleteFlow(+flowId);
  }
}