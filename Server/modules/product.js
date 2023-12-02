import {model,Schema} from 'mongoose';
//product schema
const productSchema = new Schema({
    image: {
        type: String,
        required: true,
        },
    name: {
        type: String,
        required: true,

    },
    price: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    }
});

const product =model('product',productSchema); 

export default product;