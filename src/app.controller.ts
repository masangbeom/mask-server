import { Get, Post, Body, Res, HttpStatus,Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  root(): string {
    return this.appService.root();
  }
}
