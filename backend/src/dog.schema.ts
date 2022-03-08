import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

//Schema function helps us to connect to the mongoDb collection and definnes the shape of the document within the doc
@Schema()
export class Dog {
    //Prop defines a property in the document
    
    @Prop()
    name: string; //property 
    @Prop()
    breed: string;
    @Prop()
    age: number;

    // creating relationships between models
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
    owner: '';

    //Nest object
    @Prop(raw({
        firstName: { type: String },
        lastName: { type: String }
      }))
      details: Record<string, any>;

    //for Arrays and objects
    @Prop([String])
    tags: string[];
    
}
export const DogSchema = SchemaFactory.createForClass(Dog);