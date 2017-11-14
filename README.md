# TypeScript Express Server

### Getting Started

`npm install`

`npm start`

### Note

This application was made with the help of the official ExpressJS documentation,
The structure is pretty straight forward, you have :

- Your Controllers (Logic, Reponse, Request etc...)
- Your Middlewares (Guards, log etc...)
- Your Models (For Mongoose, Schema support)
- Your Routers (Route files, use of Middlewares, use of Controllers)
- Your Test (Mocha JS driven)
- Your templates (EJS driven)

### Architecture

This application work like a regular MVC based framework (like in PHP or Django) :

All the request will be handle by Express, and he will watch if the route you try to access is available in ALL the routers you have.

Then, if a route match, a method will be called in the controller linked to that route (please, try to focus and name your routes / controllers the same way, like 'apiRouter' and 'apiController').

The controller is here to handle and "play" with the request, and send back the data, the view, or an error, in short, all the logic are here.



### Features

If you type :

` npm run cli ` You will have an helper that show you what you can generate.

At this time, the cli can create :

- Controllers `npm run cli g c <controllerName>`
- Models `npm run cli g m <modelName>`
- Middlewares `npm run cli g mw <middleWareName>`
- Routes `npm run cli g r <routeName>`

AND

- 'g' stand for 'generate'
- 'm' stand for 'model'
- 'c' stand for 'controller'
- 'mw' stand for 'middleware'
- 'r' stand for 'route'


### Using

- MongoDB
- Mongoose
- Mocha
- Morgan
- Node/Express
- TypeScript (w/ ES2017)
- Npm
- Templating EJS
- Custom CLI in Shell

Victor Bienne
