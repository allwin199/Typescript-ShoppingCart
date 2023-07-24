import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
    sku: string;
    name: string;
    price: number;
};

// const initState: ProductType[] = [];
// this is used, when getting data from api.
// for this project we are hard coding.

const initState: ProductType[] = [
    {
        sku: "item0001",
        name: "Widget",
        price: 9.99,
    },
    {
        sku: "item0002",
        name: "Premium Widget",
        price: 19.99,
    },
    {
        sku: "item0003",
        name: "Deluxe Widget",
        price: 29.99,
    },
];

export type UseProductContextType = {
    products: ProductType[];
};

const initialContextState: UseProductContextType = {
    products: [],
};

const ProductsContext =
    createContext<UseProductContextType>(initialContextState);

type ChildrenType = {
    children?: ReactElement | ReactElement[];
};

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState);

    // useEffect(() => {
    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch("http://localhost:3500/products")
    //             .then((res) => res.json())
    //             .catch((e) => {
    //                 if (e instanceof Error) console.log(e);
    //             });
    //         return data;
    //     };

    //     fetchProducts().then((products) => setProducts(products));
    // }, []);

    // above is the sample format, if we need to fetch data from api

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContext;
