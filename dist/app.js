"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const http = __importStar(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = __importStar(require("path"));
app.use(express_1.default.static('public')); // Serve static files from the 'public' folder
app.use(body_parser_1.default.json({ limit: "100mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "100mb", extended: true }));
app.use(body_parser_1.default.text({ type: 'text/plain' }));
app.use(body_parser_1.default.urlencoded({
    extended: true,
    type: 'application/x-www-form-urlencoded'
}));
app.get('/v1/api/health', (req, res) => {
    res.send({
        success: true,
        msg: "Gpay Payment Express is successfully running...."
    });
});
// Set up a route to serve your HTML page
app.get('/v1/app/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'payment', 'index.html'));
});
// Starting the server on the port
const httpServer = http.createServer(app);
const server = httpServer.listen(process.env.PAYMENT_PORT, function () {
    console.info(`Gpay Payment Express is Listening at -:+++++++${process.env.PAYMENT_PORT}`);
});
server.timeout = 30000;
//# sourceMappingURL=app.js.map