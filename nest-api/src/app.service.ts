import { Injectable } from '@nestjs/common';
import { GenerateFileResponse } from './dto/generate.file.response.dto';
import { OBJECT_TYPE } from './enum/object.type.enum';
import { possibleObject } from './utils/consts';
const fs = require('fs');

@Injectable()
export class AppService {

  private readonly fileName = 'RandomFile.txt';
  private readonly filePath = `./files/${this.fileName}`;
  private readonly TWO_MEGABYTE = 2 * (1024 * 1024);
  private integerCount: number = 0;
  private realNumberCount: number = 0;
  private alphanumaricCount: number = 0;
  private alphanumaricStringCount: number = 0;

  getHello(): string {
    return 'Hello World!';
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * max) % max;
  }

  getRandomChar(): string {
    const MAX_ALPHANUMARIC_COUNT = 58;
    const BASE_CHAR_CODE = 65;
    const randomIndex = this.getRandomInt(MAX_ALPHANUMARIC_COUNT);
    const charCode = BASE_CHAR_CODE + randomIndex;
    return String.fromCharCode(charCode);
  }

  getRandomRealNumber(): string {
    const rndomRealNumber = Math.random() + this.getRandomInt(20);
    return rndomRealNumber.toString();
  }

  getRandomAlphanumaricString(): string {
    let generatedString: string = '';
    let stringLength: number = this.getRandomInt(20) + 2;
    
    while(stringLength > 0) {
      generatedString = `${generatedString}${this.getRandomChar()}`;
      stringLength--;
    }

    return generatedString;
  }

  getRandomItem(): string {
    //console.log('generating new random Item.')
    const randomObjectIndex = this.getRandomInt(possibleObject.length);
    const selectedObjectType = possibleObject[randomObjectIndex];

    switch(selectedObjectType) {
      case OBJECT_TYPE.INTEGER:
        //console.log('generating new INTEGER');
        this.integerCount++;
        return this.getRandomInt(1000).toString();
      case OBJECT_TYPE.ALPHANUMERIC:
        //console.log('generating new ALPHANUMERIC');
        this.alphanumaricCount++;
        return this.getRandomChar();
      case OBJECT_TYPE.REAL_NUMBERS:
        //console.log('generating new REAL_NUMBERS');
        this.realNumberCount++;
        return this.getRandomRealNumber();
      case OBJECT_TYPE.ALPHABETICAL_STRINGS:
        //console.log('generating new ALPHABETICAL_STRINGS');
        this.alphanumaricStringCount++;
        return this.getRandomAlphanumaricString();
    }
    return "Othe Value";
  }

  initializeCount(): void {
    this.alphanumaricCount = 0;
    this.alphanumaricStringCount = 0;
    this.integerCount = 0;
    this.realNumberCount = 0;
  }

  async generateFile(): Promise<GenerateFileResponse> {
    this.initializeCount();
    let response = new GenerateFileResponse();
    let fileSize = 0;
    
    let content = this.getRandomItem();

    try {
      while(content.length < this.TWO_MEGABYTE) {
        content = `${content}, ${this.getRandomItem()}`;
      }
      fs.writeFileSync(this.filePath, content);
      response.isSuccess = true;
      response.fileName = this.fileName;
    } catch(error) {
      response.isSuccess = false;
      response.fileName = '';
    }

    return response;
  }
}
