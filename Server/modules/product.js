import {model,Schema} from 'mongoose';
const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

const product =model('product',productSchema); 

export default product;