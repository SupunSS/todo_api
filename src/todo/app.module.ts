import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Supun:k9mUKMIDlfmk0PU1@supun.tgnnr8b.mongodb.net/?retryWrites=true&w=majority&dbName=todo', {
    }),
    TodoModule,
  ],
})
export class AppModule {}
