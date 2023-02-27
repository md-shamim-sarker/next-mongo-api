const {default: mongoose} = require("mongoose");

mongoose.set('strictQuery', true);

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        if(connection.readyState === 1) {
            console.log("Database Connected!");
        }
    } catch(error) {
        console.log(error.message);
        console.log("Database Not Connected!");
    }
};

export default connectMongo;