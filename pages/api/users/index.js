import {default as connectMongo} from "@/database/connection/connection";
import {deleteUser, getUsers, postUser, putUser} from "@/database/controller/usersController";

const handler = async (req, res) => {
    await connectMongo().catch(() => res.json({error: "Connection Error!!"}));

    const {method} = req;

    switch(method) {
        case "GET":
            getUsers(req, res);
            break;
        case "POST":
            postUser(req, res);
            break;
        case "PUT":
            putUser(req, res);
            break;
        case "DELETE":
            deleteUser(req, res);
            break;
        default:
            break;
    }
};

export default handler;