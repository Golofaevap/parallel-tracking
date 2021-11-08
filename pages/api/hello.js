// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1293290",
    key: "ff28efbd675796f2529b",
    secret: "a20becc1a87a9f48feb3",
    cluster: "eu",
    useTLS: true,
});
// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 3000 });

// wss.on('connection', function connection(ws) {
//   console.log('New user has been connected...');
//   ws.send('Welcome new user');
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//     ws.send('We got your message....');
//   });

// });

export default function handler(req, res) {
    const { clickId, curl } = req.query;
    pusher.trigger("my-channel-1", "my-event", {
        text: "hello world",
        content: "money",
        clickId: clickId,
        curl: curl,
    });
    res.status(200).json({ name: "John Doe" });
}
