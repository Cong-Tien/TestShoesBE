import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export interface Product {
    id:          number|null;
    name:        string;
    image:       string;
    price:       Prisma.Decimal;
    color:       string;
    description: string;
}

export class ProductAdd {
        @ApiProperty({description:"name",type:String})
        name:        string;
        @ApiProperty({description:"image",type:String})
        image:       string;
        @ApiProperty({description:"price",type:Number})
        price:       Prisma.Decimal;
        @ApiProperty({description:"color",type:String})
        color:       string;
        @ApiProperty({description:"description",type:String})
        description: string;
}
export class ProductUpdate {
    @ApiProperty({description:"id",type:Number})
    id:          number|null
    @ApiProperty({description:"name",type:String})
    name:        string;
    @ApiProperty({description:"image",type:String})
    image:       string;
    @ApiProperty({description:"price",type:Number})
    price:       Prisma.Decimal;
    @ApiProperty({description:"color",type:String})
    color:       string;
    @ApiProperty({description:"description",type:String})
    description: string;
}