import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Dog } from './dog.schema';
import { DogsService } from './dog.service';
import { CreateDogDto } from './dto';


@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    await this.dogsService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Dog> {
    return this.dogsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.dogsService.delete(id);
  }
}