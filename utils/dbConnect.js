// mongodb+srv://nikolaynik:20302030@cluster0.wlbqm.mongodb.net/nextjs

import mongoose from "mongoose";

import mongoUri from "../mongo/mongoUri.js";

const connectDB = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(mongoUri, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
    });
    return handler(req, res);
};

export default connectDB;
