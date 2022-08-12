# Token Frontend

This is the frontend code of the Token Project, developed in VueJS.

## Project setup

1. Clone this repository
2. Navigate to the project directory
3. Install development dependencies
```
npm install
```

## Environment

There are two types of environments:
* `Development` => should be used when you are working actively changing the code of the frontend. In this mode, any modifications are hot-reloaded automatically, so you can promptly see the changes in the frontend page.
* `Production` => should be used when you are building to deploy in a production server because the code generation is static and optimised.

There are two types of backends:
* `Local` => it is the [token-backend](https://github.com/gsmainclusivetechlab/token-backend) `develop` branch running locally your local machine.
* `Deployed` => it is the [token-backend](https://github.com/gsmainclusivetechlab/token-backend) `release` branch running in a production server.

You can run the token-frontend code with both types of backends.

## Development Environment

### Run with local backend
```
npm run serve
```

### Run with deployed backend
```
npm run serve-release
```

## Production Environment

### Build and use local backend
```
npm run build
```

### Build and use deployed backend
```
npm run build-release
```

### Run lint
```
npm run lint
```

### Deployment to Github Pages
```
npm run gh-pages-deploy
```
