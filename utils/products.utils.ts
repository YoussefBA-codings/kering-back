// TYPE IMPORTS
import Price from '../interfaces/price.type';
import Product from '../interfaces/product.type';

export function findSMC(product: Product): string {
    return product.style + product.material + product.color;
}

export function isProductCompleted(product: Product): boolean {
    if(!!product.description && !!product.images && (product.sellable_ecom || product.sellable_retail)) return true;
    return false;
}

export function findProductBySMC(products: Product[], SMC: string): Product {
    const product = products.find(p => findSMC(p) === SMC);
    if(!product || !isProductCompleted(product)) throw new Error('Produit non trouvé');
    return product; 
}

export function isAvailable(product: Product, country: string): Boolean {
    if(product.sellable_in?.includes(country)) return true;
    return false;
}

export function findPrice(prices: Price[], SMC: string): number | undefined {
    const todayDate = new Date();
    const productPrices = prices.find(p => p.SMC === SMC && new Date(p.begin_date) <= todayDate && new Date(p.end_date) >= todayDate );
    return productPrices?.amount
}