var Productdb = require('../model/model');

// create and save new product
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not empty!"});
        return;
    }

    // new product
    const product = new Productdb({
        img:req.body.img,
        productname:req.body.productname,
        price:req.body.price,
        thuonghieu:req.body.thuonghieu,
        khoiluong:req.body.khoiluong,
        status:req.body.status,
        huongvi:req.body.huongvi,
        soluong:req.body.soluong
    })

    // save product in the database
    product
        .save(product)
        .then(data=>{
            // res.send(data)
            res.redirect('/add-product');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Some error occurred while creating a create operation"
            });
        });
}

// retrieve and return all products/ retrueve and return a product
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

// update a new identified product by product id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
    }

    const id = req.params.id;
    Productdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Update product with ${id}.Maybe product not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error Update product information"})
        })
}

// Delete a product with specified product id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;

    Productdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Delete with id ${id}. Maybe id is wrong`})
        }else{
            res.send({
                message:"Product was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete Product with id=" + id
        });
    });
}



