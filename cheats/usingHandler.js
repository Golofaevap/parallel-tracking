import createHandler from "../../../middleware/middleware";
import City from "../../../models/city";
// import Offer from "../../../models/offer";

const handler = createHandler();

handler.get(async (req, res) => {
    // poluchit spisok ob'ektov
    console.log("get cities/");
    try {
        const cities = await City.find();
        res.json({
            message: "list of cities loaded successfully",
            result: cities,
        });
    } catch (err) {
        res.json({ message: err });
    }
});

handler.post(async (req, res) => {
    const buildings = await Building.find();
    res.status(200).json({ bldgs: buildings });
});

export default handler;
