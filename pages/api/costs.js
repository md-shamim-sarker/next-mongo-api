import ConnectMongo from "@/database/connection/connectMongo";
import {getCosts, postCost} from "@/database/controller/costController";


const handler = async (req, res) => {
    await ConnectMongo().catch(() => res.json({error: "Connection Problem!"}));

    const {method} = req;

    switch(method) {
        case "GET":
            getCosts(req, res);
            break;
        case "POST":
            postCost(req, res);
            break;
        default:
            break;
    }
};

export default handler;