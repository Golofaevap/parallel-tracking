const content = require("../../siteContent.json");

console.log(content);

export default function handler(req, res) {
    const { clickId, curl } = req.query;

    res.status(200).json({ ok: true, siteContent: content.example });
}
