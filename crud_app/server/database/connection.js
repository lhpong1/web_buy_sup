// const mongoose = require('mongoose');

// const connectDB = async()=>{
//     try{
//         // mongodb connection string
//         const con = await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })

//         console.log(`MongoDB connected:${con.connection.host}`);
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB


const mongoose = require('mongoose');

async function Connect(){
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect('mongodb://localhost:27017/db_web_buy_food_sup');
        console.log("Connect successfully !");
    }catch(error){
        console.log("Connect fail !");
    }
}

module.exports = Connect

