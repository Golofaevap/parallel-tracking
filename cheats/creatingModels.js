const mongoose = require("mongoose");
const { Schema } = mongoose;

const CityScema = Schema(
    {
        city: { type: String, required: true },
        country: { type: String, default: "Kazakhstan", required: true },
        long: { type: Number, required: true },
        lat: { type: Number, required: true },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.models["City"] || mongoose.model("City", CityScema, "cities");
