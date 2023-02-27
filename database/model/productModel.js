import {model, models, Schema} from "mongoose";

const productSchema = new Schema(
    {
        name: String,
        price: String
    }
);

const Products = models.product || model('product', productSchema);

export default Products;