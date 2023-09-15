import mongoose from "mongoose";

const Connection = () => {

    const MONGODB_URI = 'mongodb+srv://prashant:prashant@todo.epvkfbi.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected sucessfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;