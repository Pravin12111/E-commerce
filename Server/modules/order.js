import {Schema,model} from 'mongoose';

const orderSchema =  new Schema({
    product:{
        type: Schema.Types.ObjectId,
        ref:'product',
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'user'
    },
    quantity:{
        type: Number,
        default:1,
    },
    shippingAddress:{
        type:String,
        required: true
    }
})

const order = model('order',orderSchema);

export default order;