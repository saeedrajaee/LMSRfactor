import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUploadRequest } from './dto/create-upload.request';
import { join } from 'path';
import { promises as fs } from 'fs';

@Injectable()
export class UploadService {
    constructor(private readonly prismaService: PrismaService) {}

    async createLibrary(data: CreateUploadRequest) {
      return this.prismaService.library.create({
        data: {
          ...data
        },
      });
    }

    async getLibrarys() {
      const librarys = await this.prismaService.library.findMany();
      return Promise.all(
        librarys.map(async (library) => ({
          ...library,
          imageExists: await this.imageExists(library.id),
        })),
      );
    }
  
    private async imageExists(Id: number) {
      try {
       const address = await fs.access(
          join(__dirname, '../..', `uploadsFile/${Id}.jpg`),
          fs.constants.F_OK,
        );
        return true;
      } catch (err) {
        return false;
      }
    }
  
}
