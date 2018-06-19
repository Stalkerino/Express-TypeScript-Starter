import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as path from 'path';

(<any>mongoose).Promise = global.Promise;

// import our routers
// import apiRouter from './router/apiRouter';

class Server {

    // set app to be of type express.Application
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    // application config
    public config(): void {

        const MONGO_URI: string = 'mongodb://localhost/express-boilerplate';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, {
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            keepAlive: 30000,
            socketTimeoutMS: 30000
        })
            .then(() => {
                console.log('MongoDB Connection Successful');
            })
            .catch((err: Error) => {
                console.log(err);
            });

        // express middleware
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());

        // express templating
        this.app.set("view engine", "ejs");
        
    }

    // application routes
    public routes(): void {
        const router: express.Router = express.Router();

        this.app.use('/', router);
        // this.app.use('/api', apiRouter);
    }
}

// export
export default new Server().app;