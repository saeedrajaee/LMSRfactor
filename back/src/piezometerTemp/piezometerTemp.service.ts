import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePiezometerTempDto } from './dtos/create-piezometerTemp-dto';
import { UpdatePiezometerTempDto } from './dtos/update-piezometerTemp-dto';

@Injectable()
export class PiezometerTempService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPiezometerTemp(data: CreatePiezometerTempDto) {
    return this.prismaService.piezometerTemp.create({
      data: {
        ...data,
        // userId,
      },
    });
  }

  async getPiezometerTemps() {
    const piezometerTemp = await this.prismaService.piezometerTemp.findMany();
    return Promise.all(
      piezometerTemp.map(async (piezometerTemp) => ({
        ...piezometerTemp,
      })),
    );
  }

  async getPiezometerTemp(piezometerTempId: number) {
    try {
      return {
        ...(await this.prismaService.piezometerTemp.findUniqueOrThrow({
          where: { id: piezometerTempId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(
        ` PiezometerTemp not found with ID ${piezometerTempId}`,
      );
    }
  }

  async updatePiezometerTemp(id: number, data: UpdatePiezometerTempDto) {
    return this.prismaService.piezometerTemp.update({
      where: { id },
      data: {
        hipName: data.hipName,
        piezometerName: data.piezometerName,
        piezometerDate: data.piezometerDate,
        piezometerTemp: data.piezometerTemp,
        tempUnit: data.tempUnit,
      },
    });
  }

  async deletePiezometerTemp(id: number) {
    return this.prismaService.piezometerTemp.delete({
      where: { id },
    });
  }
}
