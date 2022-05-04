import fs from 'fs';
import path from 'path';

export type Product = {
  title: string
}

const p = path.join(
  path.dirname(require.main!.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb: (products: Product[]) => void) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([])
    }
    // console.log('parsed', JSON.parse(fileContent.toString()))
    return cb(JSON.parse(fileContent.toString()))
  })
}

export default class {
  title: string

  constructor(title: string) {
    this.title = title
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this)

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    })
  }

  static fetchAll(callBack: (products: Product[]) => void) {
    getProductsFromFile(callBack);
  }
}

// console.log(require.main?.filename)
// console.log(process.mainModule?.filename)
