import { Controller, Get, StreamableFile, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateFileResponse } from './dto/generate.file.response.dto';
import { ReportResponse } from './dto/report.response.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { fileName, folderName } from './utils/consts';
// import all from 'it-all'
// import { concat as uint8ArrayConcat } from 'uint8arrays/concat';
// import { create } from 'ipfs';
// import * as fileType from 'file-type'

// import got from 'got';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const url = 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg';
    // const stream = got.stream(url);
    // console.log(await fileTypeFromStream(stream));
    let file='https://ipfs.io/ipfs/QmbJ1xTDzMStxaNbeCCHRWKEqRbZhDsptTVFmN2BAw4ZDT';
    var req = await fetch(file, {method:'HEAD'});
    console.log(req.headers.get('content-type'));

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
