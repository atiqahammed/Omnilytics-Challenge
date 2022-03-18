import { Injectable } from '@nestjs/common';
import { GenerateFileResponse } from './dto/generate.file.response.dto';
const fs = require('fs');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateFile(): Promise<GenerateFileResponse> {
    let response = new GenerateFileResponse();
    
    try {
      fs.writeFileSync('./files/RandomFile.txt', 'Hey there! first try');
      // fs.writeFile("./files/RandomFile.txt", "Hey there!", function(err) {
      //   if(err) {
      //       return console.log(err);
      //   }
      //   console.log("The file was saved!");
      // });
      response.isSuccess = true;
      response.fileName = 'RandomFile.txt';
    } catch(error) {
      console.log(error);
      response.isSuccess = false;
      response.fileName = '';
    }

    return response;
  }
}
