import {Router, Request, Response, NextFunction} from 'express';
import { apiDocument, apiModel } from '../models/api';

export class apiController {

    public all(req: Request, res: Response): void {
        apiModel.find({}, {_id: false})
            .then((data: apiDocument[]) => {
                res.status(200).json(data);
            })
            .catch((error: Error) => {
                res.status(500);
            })
    }

    public create(req: Request, res: Response): void {
        const testEntry: string = req.body.testEntry;
        const testEntry2: string = req.body.testEntry2;

        const api = new apiModel({
            testEntry,
            testEntry2
        });

        api.save()
        .then((data: apiDocument) => {
            res.status(201).json(data);
        })
        .catch((err: Error) => {
            console.log('Error Api');
        })
    }
}
