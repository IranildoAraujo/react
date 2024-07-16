import { ProductDTO } from "../../../interfaces/product";

export interface ProductState {
    productsDTO: ProductDTO[];
    loading: boolean;
    error: string | null;
};