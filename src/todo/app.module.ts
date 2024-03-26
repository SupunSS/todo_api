import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://wwwsupunsankalpawimalarathna:cUuaPiBARWJPZoWd@supun.tgnnr8b.mongodb.net/todo?retryWrites=true&w=majority&appName=supun', {
    }),
    TodoModule,
  ],
})
export class AppModule {}
