import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common'
import { ProductsService } from './products.service';
import { Product } from './products.entity';


@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService, ){}

        //Get all products
        @Get()
        async findAll(): Promise<Product[]>{
            return await this.productsService.findAll();
        }

        // Get one product

        @Get(':id')
        async findOne(@Param('id') id: number): Promise<Product>{
            const product = await this.productsService.findOne(id);
            if(!product) {
                throw new Error('Product not found');
            }   else {
                return product;
            }
        }

        // Create new Product
        @Post()
        async create(@Body() product: Product): Promise<Product>{
            return await this.productsService.create(product);
        }

        // Update Product
        @Put(':id')
        async update(@Param('id') id: number, @Body() product: Product): Promise<Product>{
            return await this.productsService.update(id, product);
        }

        // Delete Product
        @Delete(':id')
        async delete(@Param('id') id: number): Promise<void>{
            //handle error if product not found
            const product = await this.productsService.findOne(id);
            if(!product) {
                throw new Error('Product not found');
            }
            return this.productsService.delete(id);
        }


    }
   

