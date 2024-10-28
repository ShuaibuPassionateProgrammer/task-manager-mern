import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
    }
    catch(error) {
        console.error("Error in database connection: " + error?.message);
        process.exit(1);
    }
};

export { connectDB };