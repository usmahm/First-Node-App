import Product from '../models/products'
import { RequestHandler } from '../models/types/genTypes';

export const getAddProducts: RequestHandler = (req, res, next) => {
  res.render('add-products', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

export const postAddProducts: RequestHandler = (req, res, next) => {
  const body = req.body as { title: string}
  const product = new Product(body.title);
  
  product.save();
  res.redirect('/');
}

export const getProducts: RequestHandler = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    })
  })
}