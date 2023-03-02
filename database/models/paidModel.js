import {model, models, Schema} from "mongoose";

const paidSchema = new Schema({
    user: String,
    date: String,
    amount: String
});

const Paids = models.cost || model('cost', paidSchema);

export default Paids;