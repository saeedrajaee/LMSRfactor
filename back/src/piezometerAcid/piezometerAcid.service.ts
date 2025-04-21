import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePiezometerAcidDto } from './dtos/create-piezometerAcid-dto';
import { UpdatePiezometerAcidDto } from './dtos/update-piezometerAcid-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PiezometerAcidService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPiezometerAcid(data: CreatePiezometerAcidDto) {
    return this.prismaService.piezometerAcid.create({
      data: {
        ...data ,
        // userId
      },
    });
  }

  async getPiezometerAcids() {
    const piezometerAcid= await this.prismaService.piezometerAcid.findMany();
    return Promise.all(
      piezometerAcid.map(async (piezometerAcid) => ({
        ...piezometerAcid,
      })),
    );
  }

  async getPiezometerAcid(piezometerAcidId: number) {
    try {
      return {
        ...(await this.prismaService.piezometerAcid.findUniqueOrThrow({
          where: { id: piezometerAcidId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(`PiezometerAcid not found with ID ${piezometerAcidId}`);
    }
  }

  async updatePiezometerAcid(id: number, data: UpdatePiezometerAcidDto) {
    return this.prismaService.piezometerAcid.update({
      where: { id },
      data: {
        hipName: data.hipName,
        piezometerName: data.piezometerName,
        piezometerDate: data.piezometerDate,
        piezometerAcidLevel: data.piezometerAcidLevel,
        piezometerAcidLevelUnit: data.piezometerAcidLevelUnit,
      },
    });
  }

  async deletePiezometerAcid(id: number) {
    return this.prismaService.piezometerAcid.delete({
      where: { id },
    });
    }
}