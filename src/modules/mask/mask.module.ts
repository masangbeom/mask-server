import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MaskService } from './mask.service';
import { MaskController } from './mask.controller';
import { MASK_INFO } from '../../entities/MASK_INFO.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MASK_INFO])],
  providers: [MaskService],
  controllers: [MaskController],
})
export class MaskModule {}
