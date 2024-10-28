import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error) {
        console.error("Error in database connection: " + error?.message);
        process.exit(1);
    }
};

export { connectDB };