import ConnectMongo from "@/database/connection/connectMongo";
import {getPaids, postPaid} from "@/database/controller/paidController";

const handler = async (req, res) => {
    await ConnectMongo().catch(() => res.json({error: "Connection Problem!"}));

    const {method} = req;

    switch(method) {
        case "GET":
            getPaids(req, res);
            break;
        case "POST":
            postPaid(req, res);
            break;
        default:
            break;
    }
};

export default handler;