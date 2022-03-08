import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsModule } from './dog.module';


/* Mongoose is an Object Data Modeling (ODM)
library for MongoDB and Node. js. It manages relationships between data,provides schema validation,
and is used to translate between objects in code and the representation of those objects in MongoDB.
 */

@Module({
  imports: [
    //forRoot() method accepts the same configuration object as mongoose.connect()
    MongooseModule.forRoot('mongodb+srv://vhutshilo:Vhutshilo1@cluster0.da7kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    DogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
