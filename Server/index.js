import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import product from './modules/product.js';
const app = express();
app.use(express.json());

const connectMongodb = async ()=>{
    const connection  = await mongoose.connect(process.env.mongodb_uri);

    if(connection){
        console.log("connected to mongodb");
    }
}

connectMongodb();


//const products =[];
/*app.post('/deleteProduct', async(req, res)=>{
    const [name] = req.body;
    const response = await product.findOneAndDelete(name);
    res.json({
        success: true,
        data: response,
        message: "product deleted successfully"
    })
})*/

app.post('/product', async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;

    const newProduct = new product({ 
        name: name,
        price: price,
        description: description
    });

    const savedProduct = await newProduct.save();
    /* const product = {
        name:name,
        price:price,
        description:description,
    }

    products.push(product);
*/
    res.json({
        success: true,
        data: savedProduct,
        message: "product added successfully"
    })
})

app.get('/products',async(req,res)=>{
    const products = await product.find();
    res.json({
        success: true,
        data: products,
        message: "products retrived successfully"
    })
})

app.get('/product/:id',async(req,res)=>{
    const {id} = req.params;

    const Product = await product.findOne({_id:id});

    res.json({
        success: true,
        data: Product,
        message: 'product retrived successfully'
    })
})

app.delete('/product/:id',async(req,res)=>{
    const {id} =req.params;

    await product.deleteOne({_id:id});

    res.json({
        success: true,
        message: 'product deleted successfully'
    })
})

app.put('/product/:id',async(req,res)=>{
    const {id} =req.params;
    const {name,price,description} = req.body;

    await product.updateOne({_id:id},{$set: {
        name:name,
        price:price,
        description:description
    }});

    const updatedproduct =  await product.findOne({_id:id});

    res.json({
        success: true,
        data: updatedproduct,
        message: 'product updated successfully'
    })
})
/*
app.get('/ping',(req,res)=>{
    res.send('pong');
})
/*
app.get('/tick',(req,res)=>{
    res.send('talk');
})

app.get('/Hi',(req,res)=>{
    res.send('Hello');
})*/
const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
