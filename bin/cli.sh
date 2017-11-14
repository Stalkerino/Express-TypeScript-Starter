#!/bin/bash
GREEN='\033[0;32m'
RED='\033[0;31m'
FIRSTARG=$1
SECONDARG=$2
ROUTE_NAME=$3
ROUTE_NAME_ROUTE=$3"Router"
ROUTESEXPORT=$3"Routes"
FILENAME=$( echo "$ROUTE_NAME" | tr -s  '[:upper:]'  '[:lower:]' )

helper () {
    echo "
${GREEN}Wrong argument(s) !
Helper :
${RED}h : this helper
${RED}g : generate
|_ ${RED}r : route <nameRoute>
|_ ${RED}m : model <nameModel>
|_ ${RED}c : controller <controllerName>
|_ ${RED}mw : middleware <middlewareModel>"
	 exit
}
createRoute () {

if [ -z "$3" ]
then
    echo "${GREEN}Argument Missing, add a route name like so : ${RED}npm run tb g r RouteName"
    exit
fi

if [ -f ./src/router/$FILENAME"Router".ts ]
then
    echo "Route already exist, exiting now..."
    exit
fi

echo "import { Router, Request, Response } from 'express';
// Import Your Controller here

class $ROUTE_NAME_ROUTE {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    // set up our routes
    public routes() {
        this.router.get('/', this.all); // Put Your Controller on each route like so : this.controller.method
    }

}

const $ROUTESEXPORT = new $ROUTE_NAME_ROUTE();
$ROUTESEXPORT.routes();

export default $ROUTESEXPORT.router;
" >> ./src/router/$FILENAME"Router".ts
echo "${GREEN}The Route ${RED}$ROUTE_NAME ${GREEN}has been added into ${RED}src/router/$FILENAME"Router".ts${GREEN}, don't forget to modify ${RED}server.ts ${GREEN}!"
}

createModel () {
if [ -z "$3" ]
then
    echo "${GREEN}Argument Missing, add a model name like so : ${RED}yarn cli g m ModelName"
    exit
fi

if [ -f ./src/models/$FILENAME.ts ]
then
    echo "Model already exist, exiting now..."
    exit
fi

echo "import { Schema, Model, model, Document } from 'mongoose';

interface $FILENAME"Interface" {

}

let $FILENAME"Schema": Schema = new Schema({

});

export interface $FILENAME"Document" extends $FILENAME"Interface", Document { }
export let $FILENAME"Model": Model<$FILENAME"Document"> = model<$FILENAME"Document">('$FILENAME', $FILENAME"Schema");" >> ./src/models/$FILENAME.ts
echo "${GREEN}The Model ${RED}$FILENAME ${GREEN}has been added into ${RED}src/models/$FILENAME.ts${GREEN}"
}

createMiddleware () {
if [ -z "$3" ]
then
    echo "${GREEN}Argument Missing, add a middleware name like so : ${RED}yarn cli g mw MiddlewareName"
    exit
fi

if [ -f ./src/middlewares/$FILENAME"Middleware".ts ]
then
    echo "Middleware already exist, exiting now..."
    exit
fi

echo "import {Request, Response, NextFunction} from 'express';

export class $FILENAME"Middleware" {

    public $FILENAME(req: Request, res: Response, next: NextFunction): void {
        console.log('$FILENAME MiddleWare');
        console.log(req);
        next();
    }

}" >> ./src/middlewares/$FILENAME.ts
echo "${GREEN}The Middleware ${RED}$FILENAME"Middleware" ${GREEN}has been added into ${RED}src/middleware/$FILENAME.ts${GREEN}"
}

createController () {
if [ -z "$3" ]
then
    echo "${GREEN}Argument Missing, add a Controller name like so : ${RED}yarn cli g c ControllerName"
    exit
fi

if [ -f ./src/controllers/$FILENAME"Controller".ts ]
then
    echo "Controller already exist, exiting now..."
    exit
fi

echo "import {Router, Request, Response, NextFunction} from 'express';

export class $FILENAME"Controller" {

    public all(req: Request, res: Response): void {
        res.json({'$FILENAME controller': 'success'});
    }
}" >> ./src/controllers/$FILENAME"Controller".ts
echo "${GREEN}The Controller ${RED}$FILENAME"Controller" ${GREEN}has been added into ${RED}src/controllers/$FILENAME.ts${GREEN}"
}

if [ $SECONDARG = "h" ]
    then
        helper
elif [ $FIRSTARG = "g" ]
then
    if [ $SECONDARG = "r" ]
    then
        createRoute $1 $2 $3
    elif [ $SECONDARG = "m" ]
    then
        createModel $1 $2 $3
    elif [ $SECONDARG = "mw" ]
    then
        createMiddleware $1 $2 $3
    elif [ $SECONDARG = "c" ]
    then
        createController $1 $2 $3
    else
        helper
    fi
else
	helper
fi