// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');
let resultLimit = 5;
// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

exports.all = () => {
  return knex
    .select('*')
    .from('products')
    .limit(resultLimit);
}

exports.countProducts = () =>{
  return knex('products').count('id as products').first()
}

exports.pagination = (page) => {
  return knex
    .select('*')
    .from('products')
    .limit(resultLimit)
    .offset(resultLimit*(page-1));
}

exports.addProduct = (product) =>{
  return knex('products')
    .insert(product)
}

exports.getProduct = (id) =>{
  return knex('products')
    .where('id',id)
    .first();
}

exports.updateProduct = (id, product) =>{
  console.log(id)
  return knex('products')
    .update(product)
    .where('id',id)
}

exports.deleteProduct = (id) =>{
  return knex('products')
    .delete()
    .where('id',id)
}