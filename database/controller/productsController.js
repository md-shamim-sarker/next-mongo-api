import Products from "../model/productsModel";

// http://localhost:3000/api/products
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        return res.json(products);
    } catch(error) {
        console.log(error.message);
    }
};

// http://localhost:3000/api/products/_id
export const getProduct = async (req, res) => {
    try {
        const {productId} = await req.query;
        const product = await Products.findById(productId);
        if(!product) {
            return res.json({error: "Data Not Found!"});
        }
        return res.json(product);
    } catch(error) {
        console.log(error.message);
    }
};

// http://localhost:3000/api/products
export const postProduct = async (req, res) => {
    try {
        const formData = await req.body;
        Products.create(formData, (error, data) => {
            if(!error) {
                return res.json(data);
            }
        });
    } catch(error) {
        console.log(error.message);
    }
};

// http://localhost:3000/api/products/?productId=_id
export const putProduct = async (req, res) => {
    try {
        const {productId} = await req.query;
        const formData = await req.body;
        const product = await Products.findByIdAndUpdate(productId, formData);
        if(!product) {
            return res.json({error: "Data Not Selected!"});
        }
        return res.json(product);
    } catch(error) {
        console.log(error.message);
    }
};

// http://localhost:3000/api/products/?productId=_id
export const deleteProduct = async (req, res) => {
    try {
        const {productId} = await req.query;
        const product = await Products.findByIdAndDelete(productId);
        if(!product) {
            return res.json({error: "Data Not Selected!"});
        }
        return res.json(product);
    } catch(error) {
        console.log(error.message);
    }
};
