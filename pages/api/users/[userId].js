import connectMongo from "@/database/connection/connection";
import {getUser} from "@/database/controller/userController";

const handler = async (req, res) => {
    connectMongo().catch(() => res.json({error: "Error in the connection"}));
    const {method} = req;
    switch(method) {
        case 'GET':
            getUser(req, res);
            break;
        default:
            break;
    }
};

export default handler;