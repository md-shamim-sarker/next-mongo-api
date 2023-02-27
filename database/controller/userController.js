import Users from "../model/userModel";

// http://localhost:3000/api/users
export const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        if(!users) {
            return res.json({error: 'Data Not Found!'});
        }
        return res.json(users);
    } catch(error) {
        return res.json({error: 'Error While Fetching Data!'});
    }
};

// http://localhost:3000/api/users/_id
export const getUser = async (req, res) => {
    try {
        const {userId} = req.query;
        if(!userId) {
            return res.json({error: 'User Id Not Found!'});
        }
        const user = await Users.findById(userId);
        return res.json(user);
    } catch(error) {
        return res.json({error: 'Error While Fetching Data!'});
    }
};

// http://localhost:3000/api/users
export const postUser = async (req, res) => {
    try {
        const formData = req.body;
        if(!formData) {
            return res.json({error: "Form Data Not Provided!"});
        }
        Users.create(formData, (err, data) => {
            if(!err) {
                return res.json(data);
            }
        });
    } catch(error) {
        return res.json(error);
    }
};

// http://localhost:3000/api/users/?userId=_id
export const putUser = async (req, res) => {
    try {
        const {userId} = req.query;
        const formData = req.body;
        if(userId && formData) {
            const user = await Users.findByIdAndUpdate(userId, formData);
            return res.json(user);
        }
        return res.json({error: "User Not Selected."});
    } catch(error) {
        return res.json({error: "Error While Updating the Data."});
    }
};

// http://localhost:3000/api/users/?userId=_id
export const deleteUser = async (req, res) => {
    try {
        const {userId} = req.query;
        if(userId) {
            const user = await Users.findByIdAndDelete(userId);
            return res.json(user);
        }
        return res.json({error: "Error While Deleting Data!"});
    } catch(error) {
        return res.json({error: "Error While Updating the Data."});
    }
};