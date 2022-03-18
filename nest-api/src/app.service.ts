import { Injectable } from '@nestjs/common';
import { GenerateFileResponse } from './dto/generate.file.response.dto';
const fs = require('fs');

@Injectable()
export class AppService {

  private readonly fileName = 'RandomFile.txt';
  private readonly filePath = `./files/${this.fileName}`;
  private readonly TWO_MEGABYTE = 2 * (1024 * 1024);

  getHello(): string {
    return 'Hello World!';
  }

  getRandomItem(): string {

    return "";
  }

  async generateFile(): Promise<GenerateFileResponse> {
    let response = new GenerateFileResponse();
    let fileSize = 0;
    
    let content = this.getRandomItem();

    try {
      
      while(fileSize < this.TWO_MEGABYTE) {
        content = `${content}, ${this.getRandomItem()}`;
        fs.writeFileSync(this.filePath, content);
        var stats = fs.statSync(this.filePath);
        fileSize = stats.size;
      }

      response.isSuccess = true;
      response.fileName = this.fileName;
    } catch(error) {
      console.log(error);
      response.isSuccess = false;
      response.fileName = '';
    }

    return response;
  }
}
