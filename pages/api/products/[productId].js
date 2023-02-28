import connectMongo from "@/database/connection/connection";
import {getProduct} from "@/database/controller/productsController";

const handler = (req, res) => {
    connectMongo().catch((error) => console.log(error.message));

    const {method} = req;

    switch(method) {
        case "GET":
            getProduct(req, res);
            break;
        default:
            break;
    }
};

export default handler;