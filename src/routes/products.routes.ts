// MODULE IMPORTS
import { Router } from 'express';

// DATA IMPORT
import products from '../../data/products.json';
import prices from '../../data/prices.json';

// UTILS
import { isProductCompleted, findProductBySMC, isAvailable, findPrice } from '../../utils/products.utils';

// TYPES
import Product from '../../interfaces/product.type';
import Params from '../../interfaces/params.type';
import {Request, Response, NextFunction} from 'express';
import HttpException from '~/exceptions/http.exception';


const routes = Router();

routes.get('/product', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query} = req;
    const SMC:string = query.SMC as string; 
    const country:string = query.country as string; 

    const product: Product = findProductBySMC(products, SMC);
    if(!isProductCompleted(product)) throw new HttpException(404, 'Produit non trouvé')
    if(!isAvailable(product, country)) throw new HttpException(401, `Produit indisponible dans ce pays : ${country}`)

    const price = findPrice(prices, SMC);
    
    return res.json({...product, price})
  } catch (err) {
    next(err);
  }
});

export default routes;