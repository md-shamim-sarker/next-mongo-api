import Costs from "../models/costModel";

// http://localhost:3000/api/costs
export const getCosts = async (req, res) => {
    try {
        const costs = await Costs.find({});
        return res.status(200).json(costs);
    } catch(error) {
        console.log(error);
    }
};

// http://localhost:3000/api/costs
export const postCost = async (req, res) => {
    try {
        const formData = req.body;
        Costs.create(formData, (error, data) => {
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