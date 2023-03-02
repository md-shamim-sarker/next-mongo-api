import {model, models, Schema} from "mongoose";

const paidSchema = new Schema({
    user: String,
    date: String,
    amount: Number
});

const Paids = models.paid || model('paid', paidSchema);

export default Paids;

/*
[
    {"user": "shamim", "date": "3/2/23", "amount": "500"},
    {"user": "shamim", "date": "3/2/23", "amount": "500"},
    {"user": "shamim", "date": "3/2/23", "amount": "500"},
    {"user": "shamim", "date": "3/2/23", "amount": "500"},
    {"user": "shamim", "date": "3/2/23", "amount": "500"}
]
*/