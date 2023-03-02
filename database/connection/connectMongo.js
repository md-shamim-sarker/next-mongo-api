import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const ConnectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        if(connection.readyState) {
            console.log('Database Connected!');
        } else {
            console.log('Database Not Connected!');
        }
    } catch(error) {
        console.log(error);
    }
};

export default ConnectMongo;