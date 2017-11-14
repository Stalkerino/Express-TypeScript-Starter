import {Router, Request, Response, NextFunction} from 'express';
import { UserModel } from '../models/ExempleModel';
import { UserDocument } from '../models/ExempleModel';


export class UserController {

    public all(req: Request, res: Response): void {
        UserModel.find({}, {_id: false, username: true}).exec()
            .then((data: UserDocument[]) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json(error);
            })

    }

    public one(req: Request, res: Response): void {
        const username: string = req.params.username;

        UserModel.findOne({username}, { username: 1}).exec()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                res.status(500).json(error);
            })
    }

    public create(req: Request, res: Response): void {
        const firstName: string = req.body.firstName;
        const lastName: string = req.body.lastName;
        const username: string = req.body.username;
        const email: string = req.body.email;
        const password: string = req.body.password;


        const user = new UserModel({
            firstName,
            lastName,
            username,
            email,
            password
        });

        user.save()
            .then((data: UserDocument) => {
                res.status(201).json(data);
            })
            .catch((error) => {
                res.status(500).json(error);
            })

    }

    public update(req: Request, res: Response): void {
        const username: string = req.params.username;

        UserModel.findOneAndUpdate({username}, req.body)
            .then((data: UserDocument) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                res.status(500).json(error);
            })

    }

    public delete(req: Request, res: Response): void {
        const username: string = req.params.username;

        UserModel.findOneAndRemove({username})
            .then(() => {
                res.status(204).end();
            })
            .catch((error) => {
                res.status(500).json(error);
            })

    }

}
