import { Request, Response, Router } from "express";

class WeatherRouter {

    router: Router

    constructor() {
        this.router = Router()
        this.routes()
    }

    /**
     * routes
     */
    public routes() {
        this.router.get("/weather/", (req, res) =>{
            res.send("Hello this is Path Weather")
        })
    }
}

const weatherRouter = new WeatherRouter()
weatherRouter.routes()
export default weatherRouter.router