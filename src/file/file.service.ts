import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
  AUDIO = 'audio',
  IMAGE = 'image',
}

@Injectable()
export class FileService {
  createFile(type: FileType, file): string {
    try {
      const fileExtension = file.originalname.split('').pop();
      const filename = uuid.v4() + '.' + fileExtension;
      const filepath = path.resolve(__dirname, '..', 'static', type);

      if (!fs.existsSync(filepath)) {
        fs.mkdirSync(filepath);
      }

      fs.writeFileSync(path.resolve(filepath, filename), file.buffer);
      return type + '/' + filename;
    } catch (error) {
      console.log(error);
      throw new HttpException(error.massega, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // removeFile(filename: string) {

  // }
}
