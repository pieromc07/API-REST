import express from 'express';
import morgan from 'morgan';
import weatherRouter from './routes/weatherRouter';

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.setting()
        this.routes()
    }


    setting() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'))
    }

    routes() {

        // *  main route
        this.app.get("/", (req, res) => {

            res.send("Hello")

        })
        // * route WeatherRouter
        this.app.use(weatherRouter)

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Listen server on port ,', this.app.get('port'));
        })
    }

}
const server = new Server();
server.start()