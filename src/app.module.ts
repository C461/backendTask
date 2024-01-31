import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://kozefra:<password>@contacts-porfolio.sloal1k.mongodb.net/?retryWrites=true&w=majority`,
    ),
    TasksModule,
  ],
})
export class AppModule {}
