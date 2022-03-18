import { Injectable } from '@nestjs/common';
import { GenerateFileResponse } from './dto/generate.file.response.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  generateFile(): GenerateFileResponse {
    let response = new GenerateFileResponse();
    response.isSuccess = true;
    response.fileName = 'RandomFile.txt';

    return response;
  }
}
