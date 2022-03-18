import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateFileResponse } from './dto/generate.file.response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate-file')
  generateFile(): GenerateFileResponse {
    return this.appService.generateFile();
  }
}
