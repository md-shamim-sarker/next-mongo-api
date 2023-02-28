import Users from "../model/usersModel";

// http://localhost:3000/api/users
export const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        return res.json(users);
    } catch(error) {
        return res.json(error.message);
    }
};

// http://localhost:3000/api/users/_id
export const getUser = async (req, res) => {
    try {
        const {userId} = req.query;
        const user = await Users.findById(userId);
        return res.json(user);
    } catch(error) {
        return res.json(error.message);
    }
};

// http://localhost:3000/api/users/email/emailId
export const getUserByEmail = async (req, res) => {
    try {
        const {emailId} = req.query;
        const user = await Users.findOne({email: emailId});
        return res.json(user);
    } catch(error) {
        return res.json(error.message);
    }
};


// http://localhost:3000/api/users
export const postUser = async (req, res) => {
    try {
        const formData = req.body;
        Users.create(formData, (error, data) => res.json(data));
    } catch(error) {
        return res.json(error.message);
    }
};

// http://localhost:3000/api/users/?userId=_id
export const putUser = async (req, res) => {
    try {
        const {userId} = req.query;
        const formData = req.body;
        const user = await Users.findByIdAndUpdate(userId, formData);
        return res.json(user);
    } catch(error) {
        return res.json(error.message);
    }
};

// http://localhost:3000/api/users/?userId=_id
export const deleteUser = async (req, res) => {
    try {
        const {userId} = req.query;
        const user = await Users.findByIdAndDelete(userId);
        return res.json(user);
    } catch(error) {
        return res.json(error.message);
    }
};