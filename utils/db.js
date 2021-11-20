const mongoose = require("mongoose");

const MONGO_URI = require("./mongoCred.json").mongo;

if (!MONGO_URI) {
    throw "Please config MONGO_URI in env";
}

// let cached = global.mongo;

// if (!cached) {
//     cached = global.mongo = { conn: null, promise: null };
// }

export async function dbConnect() {
    if (mongoose.connection.readyState >= 1) return;

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    };
    return mongoose
        .connect(process.env.MONGO_URI, opts)
        .then(() => {
            console.log("connected to db...");
        })
        .catch((err) => {
            console.log("DB connection error", err);
        });
}

export function jsonify(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export default async function dbMiddleware(req, res, next) {
    try {
        if (!global.mongoose) {
            global.mongoose = dbConnect();
        }
    } catch (error) {
        console.log(error);
    }
    return next();
}
