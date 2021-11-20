import mongoose from "mongoose";
var Schema = mongoose.Schema;

var site = new Schema({
    shortId: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        // required: true,
        default: "white",
    },
    lang: {
        type: String,
        default: "us",
    },
});

mongoose.models = {};

var Site = mongoose.model("sites", site);

export default Site;
