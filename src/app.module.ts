import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kruzhambus:admin@cluster0.2qxbg07.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
