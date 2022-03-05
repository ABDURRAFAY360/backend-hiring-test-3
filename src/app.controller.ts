import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): any {
    return {name:'Abdur Rafay'};
  }
}
