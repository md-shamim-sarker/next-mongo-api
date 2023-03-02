import Paids from "../models/paidModel";

// http://localhost:3000/api/paids
export const getPaids = async (req, res) => {
    try {
        const paids = await Paids.find({});
        return res.status(200).json(paids);
    } catch(error) {
        console.log(error);
    }
};

// http://localhost:3000/api/paids
export const postPaid = async (req, res) => {
    try {
        const formData = req.body;
        Paids.create(formData, (error, data) => {
            if(!error) {
                return res.status(200).json(data);
            } else {
                return res.json({error: "Data Not Posted!"});
            }
        });
    } catch(error) {
        console.log(error);
    }
};