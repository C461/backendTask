import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://kozefra:mortadela@contacts-porfolio.sloal1k.mongodb.net/taskapp?retryWrites=true&w=majority`,
    ),
    TasksModule,
  ],
})
export class AppModule {}
