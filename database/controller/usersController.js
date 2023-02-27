import Users from "../model/usersModel";

// http://localhost:3000/api/users
export const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        if(!users) {
            return res.json("Data is unavailable!");
        }
        return res.json(users);
    } catch(error) {
        return res.json({error: "Error While Fetching Data!"});
    }
};


export const getUser = async (req, res) => {
    try {
        const userId = req.query;
        const user = await Users.findById(userId);
        return res.json(user);
    } catch(error) {
        return res.json(error.message);
    }
};