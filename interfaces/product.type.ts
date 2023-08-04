interface Product {
    style: string,
    material: string,
    color: string,
    sizes: string[],
    name: string,
    description?: string,
    images?: string[],
    sellable_retail?: boolean,
    sellable_ecom?: boolean,
    sellable_in?: string[]
}

export default Product