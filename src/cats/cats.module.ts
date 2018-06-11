import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './services/cats.service';
import { CatSchema } from './schemas/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
