import connectMongo from "@/database/connection/connection";
import {getUserByEmail} from "@/database/controller/usersController";

const handler = async (req, res) => {
    await connectMongo().catch(() => res.json({error: "Connection Error!!"}));

    const {method} = req;

    switch(method) {
        case "GET":
            getUserByEmail(req, res);
            break;
        default:
            break;
    }
};

export default handler;