import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlsDto } from './dtos/create-pls-dto';
import { UpdatePlsDto } from './dtos/update-pls-dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PlsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPls(data: CreatePlsDto) {
    return this.prismaService.pls.create({
      data: {
        ...data ,
        // userId
      },
    });
  }

  async getPlss() {
    const pls= await this.prismaService.pls.findMany();
    return Promise.all(
      pls.map(async (pls) => ({
        ...pls,
      })),
    );
  }

  async getPls(plsId: number) {
    try {
      return {
        ...(await this.prismaService.pls.findUniqueOrThrow({
          where: { id: plsId },
        })),
      };
    } catch (err) {
      throw new NotFoundException(`Pls not found with ID ${plsId}`);
    }
  }

  async updatePls(id: number, data: UpdatePlsDto) {
    return this.prismaService.pls.update({
      where: { id },
      data: {
        hipName: data.hipName,
        plsDate: data.plsDate,
        fe: data.fe,

        feUnit: data.feUnit,
        ph: data.ph,
        phUnit: data.phUnit,

        eh: data.eh,
        ehUnit: data.ehUnit,
        ec: data.ec,

        ecUnit: data.ecUnit,
        t: data.t,
        tUnit: data.tUnit,

        tss: data.tss,

        tssUnit: data.tssUnit,
        pb: data.pb,
        pbUnit: data.pbUnit,
      },
    });
  }

  async deletePls(id: number) {
    return this.prismaService.pls.delete({
      where: { id },
    });
    }
}
