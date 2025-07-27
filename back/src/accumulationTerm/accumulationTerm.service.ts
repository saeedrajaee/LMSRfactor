import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccumulationTermDto } from './dtos/create-accumulationTerm-dto';
import { UpdateAccumulationTermDto } from './dtos/update-accumulationTerm-dto';

@Injectable()
export class AccumulationTermService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAccumulationTerm(data: CreateAccumulationTermDto) {
    console.log("datadatadatadatadatadata",data)
    return this.prismaService.accumulationTerm.create({
      data: {
        ...data
        // userId,
      },
    });
  }

  async getAccumulationTerms() {
    const accumulationTerm =
      await this.prismaService.accumulationTerm.findMany();
    return Promise.all(
      accumulationTerm.map(async (accumulationTerm) => ({
        ...accumulationTerm,
      })),
    );
  }

  async getAccumulationTerm(accumulationTermId: number) {
    try {
      return {
        ...(await this.prismaService.accumulationTerm.findUniqueOrThrow({
          where: { id: accumulationTermId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(
        `AccumulationTerm not found with ID ${accumulationTermId}`,
      );
    }
  }

  async updateAccumulationTerm(id: number, data: UpdateAccumulationTermDto) {
    return this.prismaService.accumulationTerm.update({
      where: { id },
      data: {
        hipName: data.hipName,
        flowIn: data.flowIn,
        flowUnitIn: data.flowUnitIn,
        flowOut: data.flowOut,
        flowUnitOut: data.flowUnitOut,
        accumulationDate: data.accumulationDate,
        accumulationTerm: data.accumulationTerm,
      },
    });
  }

  async deleteAccumulationTerm(id: number) {
    return this.prismaService.accumulationTerm.delete({
      where: { id },
    });
  }
}
