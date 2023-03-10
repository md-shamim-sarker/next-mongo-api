import connectMongo from "@/database/connection/connection";
import {deleteUser, getUsers, postUser, putUser} from "@/database/controller/userController";

const handler = async (req, res) => {
    connectMongo().catch(() => res.json({error: "Error in the connection"}));
    const {method} = req;
    switch(method) {
        case 'GET':
            getUsers(req, res);
            break;
        case 'POST':
            postUser(req, res);
            break;
        case 'PUT':
            putUser(req, res);
            break;
        case 'DELETE':
            deleteUser(req, res);
            break;
        default:
            res.json({error: "Notice the method!"});
            break;
    }
};

export default handler;