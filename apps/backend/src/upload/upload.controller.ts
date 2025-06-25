import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from './upload.service';
import { CreateUploadRequest } from './dto/create-upload.request';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  async createLibrary(
    @Body() body: CreateUploadRequest,
  ) {
    return this.uploadService.createLibrary(body);
  }

  @Get()
  async getLibrarys() {
    return this.uploadService.getLibrarys();
  }
  
  @Post(':Id/file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploadsFile',
        filename: (req, file, callback) => {
          // const uniqueSuffix = Date.now() + '-' + Math.random() * 1e9;
          callback(
            null,
            `${req.params.Id}${extname(file.originalname)}`,
          );
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      originlname: file.originalname,
      filename: file.filename,
    };
  }
}
