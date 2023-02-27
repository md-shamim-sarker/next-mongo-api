import {model, models, Schema} from "mongoose";

const productSchema = new Schema(
    {
        name: String,
        price: String
    }
);

const Products = models.user || model('user', productSchema);

export default Products;

/*
[
    {"name": "Product1", "price": "501"},
    {"name": "Product2", "price": "502"},
    {"name": "Product3", "price": "503"},
    {"name": "Product4", "price": "504"},
    {"name": "Product5", "price": "505"},
]
*/