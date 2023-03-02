import {model, models, Schema} from "mongoose";

const costSchema = new Schema({
    user: String,
    date: String,
    productName: String,
    price: Number
});

const Costs = models.cost || model('cost', costSchema);

export default Costs;

/*
[
    {"user": "Shamim Sarker", "date": "3/2/23", "productName": "chanacur", "price": "100"},
    {"user": "Shamim Sarker", "date": "3/2/23", "productName": "chanacur", "price": "100"},
    {"user": "Shamim Sarker", "date": "3/2/23", "productName": "chanacur", "price": "100"},
    {"user": "Shamim Sarker", "date": "3/2/23", "productName": "chanacur", "price": "100"},
    {"user": "Shamim Sarker", "date": "3/2/23", "productName": "chanacur", "price": "100"}
]
*/