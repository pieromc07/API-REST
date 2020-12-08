"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class WeatherRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    /**
     * routes
     */
    routes() {
        this.router.get("/weather/", (req, res) => {
            res.send("Hello this is Path Weather");
        });
    }
}
const weatherRouter = new WeatherRouter();
weatherRouter.routes();
exports.default = weatherRouter.router;
