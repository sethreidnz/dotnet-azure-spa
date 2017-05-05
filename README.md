# Dotnet Azure SPA

This repo shows how to build a JavaScript single page app, serve it using ASPNET Core and deploy it using [Visual Studio Team Services Continuous Integration](https://www.visualstudio.com/team-services/continuous-integration/).

The app is made up of a a client app written in [React](https://facebook.github.io/react/) and a server app written in in C# using [.NET Core]() and [ASPNET Core]().

## Pre-requisites

- Node >= 6
- [.NET Core](https://www.microsoft.com/net/core) (either the CLI or install Visual studio 2017)

## React

### Quick Start

In development mode you will be running the client app using [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) and running the API seprately. This is in order to get the benifits of live reloading from webpack during development.

**Start the server**

In order to run the server in development mode you need to first set an environment variable for ASPNET Core on you machine. Set `ASPNETCORE_ENVIRONMENT=Development` in the appropriate way for your operating system.

From the root of the project:

```bash
cd server
dotnet restore #you only need to do this the first time
dotnet run
```

The server will now be running at [http://localhost:5000](http://localhost:5000) but locally the client files won't be there so that will give you a 404. However you can test its working but loading the values controller [http://localhost:5000/api/values](http://localhost:5000/api/values).

**Start the react client**

From the root of the project:

```bash
cd client/react
npm install #you only need to do this the first time
npm start
```

This will launch the client at [http://localhost:3000](http://localhost:3000).

### Production Build

To do this you need to build the client and then copy it to the wwwroot. There are npm scripts for doing this already setup. Run the following to test the production version.

```bash
cd client/react
npm run build
npm run copy-to-wwwroot
```

Now you can run the server and see the production build:

```bash
cd server
dotnet run
```

### How does it work?

When running in "development" mode the client app will make API calls to the localhost URI. However when loading the production build version the app will use the `window.location` as the base URL for the API calls and therefore call the server that it is deployed to.

## Angular 2

TODO