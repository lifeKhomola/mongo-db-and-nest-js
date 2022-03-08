import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog, DogSchema } from './dog.schema';
import { DogsService } from './dog.service';

//forFeature defining which models should be registered in the current scope.

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
//   controllers: [CatsController],
  providers: [DogsService],
})
export class DogsModule {}