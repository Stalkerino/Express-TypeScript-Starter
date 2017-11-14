import {Router} from 'express';
import {UserController} from '../controllers/ExempleController';

class UserRouter {

    public router: Router;

    private controller: UserController;

    constructor() {
        this.router = Router();
        this.controller = new UserController;
        this.routes();
    }

    // set up our routes
    public routes() {
        // this.router.use(this.myMiddleware);
        this.router.get('/', this.controller.all);
        this.router.get('/:username', this.controller.one);
        this.router.post('/', this.controller.create);
        this.router.put('/:username', this.controller.update);
        this.router.delete('/:username', this.controller.delete);
    }

}

const userRoutes = new UserRouter();
userRoutes.routes();


export default userRoutes.router;
