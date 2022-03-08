import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './dog.schema';
import { CreateDogDto } from './dto';


@Injectable()
export class DogsService {

  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}

  async create(createCatDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createCatDto);
    return createdDog.save();
  }

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }
  async findOne(id: string): Promise<Dog> {
    return this.dogModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedDog = await this.dogModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedDog;
  }
}
