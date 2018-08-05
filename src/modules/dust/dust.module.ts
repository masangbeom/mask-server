import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DustService } from './dust.service';
import { DustController } from './dust.controller';
import { DUST } from '../../entities/DUST.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([DUST])],
  providers: [DustService],
  controllers: [DustController],
})
export class DustModule {}
