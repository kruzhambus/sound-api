import { Controller, Get } from '@nestjs/common';

@Controller('/tracks')
export class TrackController {
  create() {
    console.log('as');
  }
  @Get()
  getAll() {
    return 'das';
  }

  getOne() {
    console.log('as');
  }

  delete() {
    console.log('as');
  }
}
