import connectMongo from "@/database/connection/connection";
import {getProducts} from "@/database/controller/productController";

const handler = async (req, res) => {
    connectMongo().catch(() => res.json({error: "Error in the connection"}));
    const {method} = req;
    switch(method) {
        case 'GET':
            getProducts(req, res);
            break;
        default:
            break;
    }
};

export default handler;