import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWellWaterLevelDto } from './dtos/create-wellWaterLevel-dto';
import { UpdateWellWaterLevelDto } from './dtos/update-wellWaterLevel-dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class WellWaterLevelService {
  constructor(private readonly prismaService: PrismaService) {}

  async createWellWaterLevel(data: CreateWellWaterLevelDto) {
    return this.prismaService.wellWaterLevel.create({
      data: {
        ...data ,
        // userId,
      },
    });
  }

  async getWellWaterLevels() {
    const wellWaterLevel= await this.prismaService.wellWaterLevel.findMany();
    return Promise.all(
      wellWaterLevel.map(async (wellWaterLevel) => ({
        ...wellWaterLevel,
      })),
    );
  }

  async getWellWaterLevel(wellWaterLevelId: number) {
    try {
      return {
        ...(await this.prismaService.wellWaterLevel.findUniqueOrThrow({
          where: { id: wellWaterLevelId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(`WellWaterLevel not found with ID ${wellWaterLevelId}`);
    }
  }

  async updateWellWaterLevel(id: number, data: UpdateWellWaterLevelDto) {
    return this.prismaService.wellWaterLevel.update({
      where: { id },
      data: {
        hipName: data.hipName,
        wellLevelDate: data.wellLevelDate,
        wellName: data.wellName,
        wellLevelHeight: data.wellLevelHeight,
        wellLevelUnit: data.wellLevelUnit,
      },
    });
  }

  async deleteWellWaterLevel(id: number) {
    return this.prismaService.wellWaterLevel.delete({
      where: { id },
    });
    }
}
