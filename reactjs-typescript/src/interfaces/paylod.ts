import { ProductDTO } from "./product";

export interface PayloadDTO {
    limit: number;
    products: ProductDTO[];
    skip: number;
    total: number;
}