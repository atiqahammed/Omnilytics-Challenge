import { Controller, Get, StreamableFile, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateFileResponse } from './dto/generate.file.response.dto';
import { ReportResponse } from './dto/report.response.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { fileName, folderName } from './utils/consts';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate-file')
  async generateFile(): Promise<GenerateFileResponse> {
    return await this.appService.generateFile();
  }

  @Get('get-report')
  getReport(): ReportResponse {
    return this.appService.getReport();
  }

  @Get('download-file')
  getFile(@Response({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd() + `/${folderName}`, fileName));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    });
    return new StreamableFile(file);
  }


}
