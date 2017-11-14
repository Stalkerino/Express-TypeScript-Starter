import "mocha";
import {Router, Request, Response, NextFunction} from 'express';
import { UserModel } from '../models/ExempleModel';
import { UserDocument } from '../models/ExempleModel';

//require chai and use should() assertions
let chai = require("chai");
chai.should();

describe('Routing', function(): void {
        it('should return true', function(): void {
            let test = true;
            chai.expect(test).to.equal(true);
        });
});