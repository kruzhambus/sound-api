import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModule: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModule: Model<CommentDocument>,
  ) {}

  async create() {
    console.log('as');
  }

  async getAll() {
    console.log('as');
  }

  async getOne() {
    console.log('as');
  }

  async delete() {
    console.log('as');
  }
}
