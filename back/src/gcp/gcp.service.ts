import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGcpRequest } from './dto/create-gcp.request';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateGcpDto } from './dto/update-gcp.request';

@Injectable()
export class GcpService {
  constructor(private readonly prismaService: PrismaService) {}

  async createGcp(data: CreateGcpRequest) {
    return this.prismaService.gcps.create({
      data: {
        ...data ,
        // userId
      },
    });
  }

  async getGcps() {
    const gcp= await this.prismaService.gcps .findMany();
    return Promise.all(
      gcp.map(async (gcp) => ({
        ...gcp,
      })),
    );
  }

  async getGcp(gcpId: number) {
    try {
      return {
        ...(await this.prismaService.gcps.findUniqueOrThrow({
          where: { id: gcpId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(`Gcp not found with ID ${gcpId}`);
    }
  }

  async updateGcp(id: number, data: UpdateGcpDto) {
    return this.prismaService.gcps.update({
      where: { id },
      data: {
        hipName: data.hipName,
        gcpName: data.gcpName,
        gcpX: data.gcpX,
        gcpY: data.gcpY,
        gcpZ: data.gcpZ,
        date: data.date,
        gcpHeight: data.gcpHeight,
        dDay: data.dDay,
        dx: data.dx,
        dxR: data.dxR,
        dxR1: data.dxR1,
        dy: data.dy,
        dyR: data.dyR,
        dyR1: data.dyR1,
        dz: data.dz,
        dzR: data.dzR,
        dzR1: data.dzR1,
        ds: data.ds,
        dsR: data.dsR,
        dsR1: data.dsR1,
        dt: data.dt,
        dtR: data.dtR,
        dtR1: data.dtR1,
      },
    });
  }

  async deleteGcp(id: number) {
    return this.prismaService.gcps.delete({
      where: { id },
    });
    }
}
