import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { Rating } from './products.entity';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        @InjectRepository(Rating)
        private ratingRepository: Repository<Rating>
    ) {}

    // Get All  Products
    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    // Get One Product
    async findOne(id: number): Promise<Product> {
        return await this.productRepository.findOne({where : {id}});
    }

    // Create a Product
    async create(product: Product): Promise<Product> {
        const newProduct = this.productRepository.create(product);
        return await this.productRepository.save(newProduct);
    }

    // Update a Product
    async update(id: number, product: Product): Promise<Product> {
        await this.productRepository.update(id, product);
        return await this.productRepository.findOne({where : {id}});
    }

    // Delete a Product
    async delete(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
