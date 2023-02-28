import {default as connectMongo} from "@/database/connection/connection";
import {deleteProduct, getProducts, postProduct, putProduct} from "@/database/controller/productsController";

const handler = (req, res) => {
    connectMongo().catch((error) => console.log(error.message));

    const {method} = req;

    switch(method) {
        case "GET":
            getProducts(req, res);
            break;
        case "POST":
            postProduct(req, res);
            break;
        case "PUT":
            putProduct(req, res);
            break;
        case "DELETE":
            deleteProduct(req, res);
            break;
        default:
            res.json({
                error: method + " is not allowed!",
                message: "You can use only GET, POST, PUT and DELETE method."
            });
    }
};

export default handler;