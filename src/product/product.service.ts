import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Product, ProductAdd } from './DTO/product.dto';

@Injectable()
export class ProductService {
  private prisma: PrismaClient = new PrismaClient();
  getProduct(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
  getProductByID(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: {
        id: +id,
      },
    });
  }
  createProduct(product:ProductAdd): Promise<Product> {
    return this.prisma.product.create({
        data: product
    });
  }
  updateProduct(product:Product): Promise<Product> {
    return this.prisma.product.update({
        where:{
            id: product.id
        },
        data: product
    });
  }
  deleteProduct(id:string): Promise<Product> {
    return this.prisma.product.delete({
        where:{
            id:+id
        }
    });
  }
}
