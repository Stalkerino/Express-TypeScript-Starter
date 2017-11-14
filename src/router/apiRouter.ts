import { Router, Request, Response } from 'express';
import { apiController } from '../controllers/apiController';


class apiRouter {

    public router: Router;
    public controller: apiController;

    constructor() {
        this.router = Router();
        this.controller = new apiController;
        this.routes();
    }

    // set up our routes
    public routes() {
        this.router.get('/', this.controller.all);
        this.router.post('/create', this.controller.create);
    }

}

const apiRoutes = new apiRouter();
apiRoutes.routes();

export default apiRoutes.router;

