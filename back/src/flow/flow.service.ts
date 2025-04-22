import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateFlowDto } from './dtos/update-flow-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlowDto } from './dtos/create-flow-dto';

@Injectable()
export class FlowService {
    constructor(private readonly prismaService: PrismaService) {}

    async createFlow(data: CreateFlowDto) {
      return this.prismaService.flow.create({
        data: {
          ...data ,
          // userId,
        },
      });
    }
  
    async getFlows() {
      const flow= await this.prismaService.flow.findMany();
      return Promise.all(
        flow.map(async (flow) => ({
          ...flow,
        })),
      );
    }
  
    async getFlow(flowId: number) {
      try {
        return {
          ...(await this.prismaService.flow.findUniqueOrThrow({
            where: { id: flowId },
          })),
        };
      } catch (err) {
        throw new NotFoundException(`Flow not found with ID ${flowId}`);
      }
    }
  
    async updateFlow(id: number, data: UpdateFlowDto) {
      return this.prismaService.flow.update({
        where: { id },
        data: {
            hipName: data.hipName,
            flowDataIntDate: data.flowDataIntDate,
            flowRate: data.flowRate,
            flowUnit: data.flowUnit,
            pad: data.pad,
        },
      });
    }
  
    async deleteFlow(id: number) {
      return this.prismaService.flow.delete({
        where: { id },
      });
      }
}