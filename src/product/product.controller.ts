import { Body, Controller,Delete,Get, Param, Post, Put, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductAdd, ProductUpdate } from './DTO/product.dto';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Product")
@Controller('api/v1/product')
export class ProductController {
    constructor(private productService: ProductService){}
    @Get()
    getProduct(): Promise<Product[]> {
        return this.productService.getProduct()
    }
    @Get("/:id")
    getProductById(@Param("id") id:string): Promise<Product> {
        return this.productService.getProductByID(id)
    }
    @Post("")
    createProduct(@Body() product:ProductAdd): Promise<Product> {
        return this.productService.createProduct(product)
    }
    @Put("")
    updateProduct(@Body() product:ProductUpdate): Promise<Product> {
        return this.productService.updateProduct(product)
    }
    @Delete("/:id")
    deleteProduct(@Param("id") id:string): Promise<Product> {
        return this.productService.deleteProduct(id)
    }
}
