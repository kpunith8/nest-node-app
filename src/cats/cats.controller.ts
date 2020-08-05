import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Req,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto, UpdateCatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'Returns all the cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log('param id:', params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    console.log('createCatDto Request Body:', createCatDto);
    return 'This action adds a new cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log('UpdateDto for cat:', updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
