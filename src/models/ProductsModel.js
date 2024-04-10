const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        title:{type:String},
        category:{type:String},
        image:{type:String},
        price:{type:String},
        brand:{type:String},
        stock:{type:String},
        product_code:{type:String}
    },
    {versionKey:false}
);

const ProductsModel = mongoose.model('products',DataSchema);
module.exports=ProductsModel;