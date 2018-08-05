import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }

  constructor(
  ){}
}
