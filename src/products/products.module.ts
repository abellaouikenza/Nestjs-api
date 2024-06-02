import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Rating } from './products.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Product, Rating])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
