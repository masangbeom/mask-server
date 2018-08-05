import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MASK_INFO } from '../../entities/MASK_INFO.entity';

@Injectable()
export class MaskService {
  constructor(
    @InjectRepository(MASK_INFO)
    private readonly maskRepository: Repository<MASK_INFO>,
  ) {
  }

  async insertMask(insertMask: MASK_INFO) {
    return await this.maskRepository.save(insertMask);
  }

  async findAll() {
    return await this.maskRepository.find();
  }

  async delete(idx: number) {
    const maskRemove = await this.maskRepository.findOne(idx);
    return await this.maskRepository.remove(maskRemove);
  }
}
