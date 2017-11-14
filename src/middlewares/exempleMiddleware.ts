import {Request, Response, NextFunction} from 'express';

export class FirstMiddleware {

    public myMiddleware(req: Request, res: Response, next: NextFunction): void {
        console.log('Post MiddleWare');
        console.log(req);
        next();
    }

}