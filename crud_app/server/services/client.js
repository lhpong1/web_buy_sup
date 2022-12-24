const axios = require('axios');


exports.homeRoutes = (req,res)=>{
    // Make a get request to /api/products
    axios.get('http://localhost:3000/api/products')
    .then(function(response){
      res.render('client/index',{products:response.data});
    })
    .catch(err=>{
        res.send(err);
    })

}

//category
exports.shop_category = (req,res)=>{
  // Make a get request to /api/products
  axios.get('http://localhost:3000/api/products')
  .then(function(response){
    res.render('client/shop_category',{products:response.data}); // fix duong link
  })
  .catch(err=>{
      res.send(err);
  })

}

// single_product
// exports.single_product = (req,res)=>{
//   // Make a get request to /api/products
//   axios.get('http://localhost:3000/api/products')
//   .then(function(response){
//     res.render('client/single_product',{products:response.data}); // fix duong link
//   })
//   .catch(err=>{
//       res.send(err);
//   })

// }

// shop_cart
exports.shop_cart = (req,res)=>{
  // Make a get request to /api/products
  axios.get('http://localhost:3000/api/products')
  .then(function(response){
    res.render('client/shop_cart',{products:response.data}); // fix duong link
  })
  .catch(err=>{
      res.send(err);
  })

}

// shop_contact
exports.shop_contact = (req,res)=>{
  // Make a get request to /api/products
  axios.get('http://localhost:3000/api/products')
  .then(function(response){
    res.render('client/shop_contact',{products:response.data}); // fix duong link
  })
  .catch(err=>{
      res.send(err);
  })

}

// shop_login
exports.shop_login = (req,res)=>{
  // Make a get request to /api/products
  axios.get('http://localhost:3000/api/products')
  .then(function(response){
    res.render('client/shop_login',{products:response.data}); // fix duong link
  })
  .catch(err=>{
      res.send(err);
  })

}


// single_product
exports.single_product = (req,res)=>{
  axios.get('http://localhost:3000/api/products',{params:{id:req.query.id}})
      .then(function(productdata){
          res.render("client/single_product",{product:productdata.data})
      })
      .catch(err=>{
          res.send(err);
      })
}

