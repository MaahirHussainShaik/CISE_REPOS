import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './APIs/Books/book.module';
import { ConfigModule } from '@nestjs/config';

const DB_URI = 
 'mongodb+srv://maahihussain2506:92jqT9nShT1HizIn@cluster0.ws06n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  imports: [
    MongooseModule.forRoot(DB_URI),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
