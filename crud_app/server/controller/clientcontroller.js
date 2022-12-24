var Productdb = require('../model/model');

exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Productdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found prodouct with id" +id})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error retrieving product with id"+id})
    })
    }else{
        Productdb.find()
        .then(product=>{
            res.send(product)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"Error Occurred while ritriving product information"})
        })
    }
} 

exports.single_product = (req,res) =>{
    const id = req.params.id;
    Productdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not found prodouct with id" +id})
    }else{
        res.render("client/single_product",{
            products: data
        })
    }
})
}


exports.shop_category = (req,res) =>{
    const id = req.params.id;
    Productdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not found prodouct with id" +id})
    }else{
        res.render("client/single_product",{
            products: data
        })
    }
})
}



// exports.index = (req, res) =>{
//     res.render('client/index')
//     // res.send("123")
//     }

