const express = require('express');
const route = express.Router()

const services = require('../services/render');
const servicesclient = require('../services/client');
const controller = require('../controller/controller');
const clientcontroller = require('../controller/clientcontroller');


/**
 * @description Root Route
 * @method GET /
 */

// Thêm route
route.get('/',services.homeRoutes);
route.get('/client',servicesclient.homeRoutes);
route.get('/client/shop_category',servicesclient.shop_category); //fix duong link
route.get('/client/single_product',servicesclient.single_product); //fix duong link
route.get('/client/shop_cart',servicesclient.shop_cart); //fix duong link
route.get('/client/shop_contact',servicesclient.shop_contact); //fix duong link
route.get('/client/shop_login',servicesclient.shop_login); //fix duong link
// route.get('/client/single_product',servicesclient.single_product); //fix duong link





/**
 * @description add products
 * @method GET /add-product
 */

route.get('/add-product',services.add_product)

/**
 * @description for update product
 * @method GET /update-product
 */

route.get('/update-product',services.update_product)

// API
route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);


//Client
// Thêm route với controller (hành động)
route.get('/client', clientcontroller.find);
route.get('/client/shop_category', clientcontroller.find);// fix duong link
route.get('/client/single_product', clientcontroller.find);// fix duong link
route.get('/client/shop_cart', clientcontroller.find);// fix duong link
route.get('/client/shop_contact', clientcontroller.find);// fix duong link
route.get('/client/shop_login', clientcontroller.find);// fix duong link
route.get('/client/single_product/:id', clientcontroller.single_product);// fix duong link
route.get('/client/shop_category/:id', clientcontroller.shop_category);// fix duong link




// route.get('/client',client.index);
// route.get('/client',client.contact);


module.exports = route