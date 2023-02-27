import Products from "../model/productModel";

// http://localhost:3000/api/products
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        if(!products) {
            return res.json({error: 'Data Not Found!'});
        }
        res.json(products);
    } catch(error) {
        res.json({error: 'Error While Fetching Data!'});
    }
};