import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCopperConcentrationDto } from './dtos/create-copperConcentration-dto';
import { UpdateCopperConcentrationDto } from './dtos/update-copperConcentration-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CopperConcentrationService {
    constructor(private readonly prismaService: PrismaService) {}

    async createCopperConcentration(data: CreateCopperConcentrationDto) {
      return this.prismaService.copperConcentration.create({
        data: {
          ...data ,
          // userId,
        },
      });
    }
  
    async getCopperConcentrations() {
      const copperConcentration= await this.prismaService.copperConcentration.findMany();
      return Promise.all(
        copperConcentration.map(async (copperConcentration) => ({
          ...copperConcentration,
        })),
      );
    }
  
    async getCopperConcentration(copperConcentrationId: number) {
      try {
        return {
          ...(await this.prismaService.copperConcentration.findUniqueOrThrow({
            where: { id: copperConcentrationId },
          })),
        };
      } catch (err) {
        throw new NotFoundException(`CopperConcentration not found with ID ${copperConcentrationId}`);
      }
    }
  
    async updateCopperConcentration(id: number, data: UpdateCopperConcentrationDto) {
      return this.prismaService.copperConcentration.update({
        where: { id },
        data: {
            hipName: data.hipName,
            copConDate: data.copConDate,
            copCon: data.copCon,
            copConUnit: data.copConUnit,
        },
      });
    }
  
    async deleteCopperConcentration(id: number) {
      return this.prismaService.copperConcentration.delete({
        where: { id },
      });
      }
}