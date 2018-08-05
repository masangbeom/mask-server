import { Controller, Post, Body, Res, HttpStatus, Get, Delete, Param } from '@nestjs/common';
import { MaskService } from './mask.service';

@Controller('mask')
export class MaskController {
  constructor(private readonly maskService: MaskService) {}

}
