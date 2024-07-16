import React, { useCallback, useEffect } from "react";
import Andress from "../Andress";

import Product from "../Product";

import { ProductDTO } from "../../interfaces/product";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAndressAsync } from "../../store/slices/andress";
import { fetchProducts } from "../../store/slices/product";
import { BarCard } from "../BarCard";

export interface PatherProps {
    productsDTO: ProductDTO[];
}

// const ProductContext = React.createContext<ProductDTO[]>([]);
// const useGetProducts = () => React.useContext(ProductContext);

// const AndressContext = React.createContext<AndressDTO | null>(null);
// const useGetAndress = () => {
//     const andress = React.useContext(AndressContext);
//     if(!andress) {
//         throw new Error('useGetAndress must be used within an AndressProvider');
//     }
//     return andress;
// };

const Pather: React.FC = () => {
    const dispatch = useAppDispatch();
    const productsDTO = useAppSelector(state => state.productStore.productsDTO);
    const andressDTO = useAppSelector(state => state.andressStore.andressDTO);
    // const [andress, setAndress] = useState<AndressDTO>();
 
    const handleFindProduct = useCallback(async () => {
        try {
            dispatch(fetchProducts('https://dummyjson.com/products'));
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
    }, [dispatch]);

    const handleFindAddress = useCallback(async () => {
    try{
        // const response = await fetch('https://viacep.com.br/ws/01001000/json/');
        dispatch(fetchAndressAsync('https://viacep.com.br/ws/01001000/json/'));
        // const data = await response.json();
        // if (data !== undefined) {
        //     const andressDTO = data as AndressDTO;
        //     setAndress(andressDTO);
        // }
    } catch (error) {
        console.error("Erro ao buscar endereços:", error);
    }
    }, [dispatch]);

    useEffect(() => {
     handleFindProduct();
     handleFindAddress();
    }, [handleFindProduct, handleFindAddress]);

    if (andressDTO === undefined
        || productsDTO === undefined) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
        {/*ProductContext.Provider value={products}>*/}
            {/*<AndressContext.Provider value={andress}>*/}
                <BarCard />
                <Andress />
                <Product />
        {/*</AndressContext.Provider>*/}
         {/*</ProductContext.Provider>*/}
        </div>
    );
};

// export { useGetProducts };
// export { useGetAndress };

export default Pather;
