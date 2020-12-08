"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const weatherRouter_1 = __importDefault(require("./routes/weatherRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.setting();
        this.routes();
    }
    setting() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan_1.default('dev'));
    }
    routes() {
        // *  main route
        this.app.get("/", (req, res) => {
            res.send("Hello");
        });
        // * route WeatherRouter
        this.app.use(weatherRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Listen server on port ,', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
