"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 670:
/***/ ((module) => {

module.exports = require("pusher");

/***/ }),

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Pusher = __webpack_require__(670);
const pusher = new Pusher({
    appId: "1293290",
    key: "ff28efbd675796f2529b",
    secret: "a20becc1a87a9f48feb3",
    cluster: "eu",
    useTLS: true
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
function handler(req, res) {
    const { clickId  } = req.query;
    pusher.trigger("my-channel-1", "my-event", {
        text: "hello world",
        content: "money",
        clickId: clickId
    });
    res.status(200).json({
        name: "John Doe"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(677));
module.exports = __webpack_exports__;

})();