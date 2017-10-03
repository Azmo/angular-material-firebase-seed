# angular-material-firebase-seed
Seed for angular CLI application with Material Design and Firebase as a backend.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Set up development environment
* We recommend [Visual Studio Code](https://code.visualstudio.com/) for code editing
* Install [Node.js](https://nodejs.org/en/)
* Install [git](https://git-scm.com/)

`npm install -g @angular/cli`

## Create new app on Facebook
Get: 
* App ID
* App secret
* OAuth redirect URI

## Set up project on Firebase
* Create new project on [Firebase](https://console.firebase.google.com/)
* Go to Firebase console -> Authentication -> SIGN-IN METHOD (https://console.firebase.google.com/project/{PROJECT-NAME}/authentication/providers) and enable Google and Facebook Providers

## Update project name and settings
* Update app name in the package.json file
* Update project names in the .firebaserc file
* Update project name in the .angular-cli.json
* Go to general project settings on Firebase console
(https://console.firebase.google.com/project/{PROJECT-NAME}/settings/general/)
click "Add Firebase to your web app", copy config and update firebaseConfig variable in app.module.ts
* Search and replace all "seed" words in the project

## Firebase
We use [Firebase](https://firebase.google.com) for hosting, backend and database.
[How to deploy Angular CLI apps to Firebase](https://coryrylan.com/blog/deploy-angular-cli-apps-to-firebase)

## Deploy to Firebase
* `npm install -g firebase-tools`
* `firebase login`
* `firebase init`
* `ng build -prod`
* `firebase deploy -P dev`

## Material Design
We use [Angular Material](https://material.angular.io) to develop UI following [Material design guidelines](https://material.io/guidelines)
[Material icons](https://material.io/icons)

## Responsive layout
[Angular Flex Layout](https://github.com/angular/flex-layout)
[Layout Demos](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

## CI/CD
We use [Travis CI](https://travis-ci.org) for continuous integration and deployment to Firebase.
[Travis CI Firebase Deployment](https://docs.travis-ci.com/user/deployment/firebase/)

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

