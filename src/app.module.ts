import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://kruzhambus:admin@cluster0.2qxbg07.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
