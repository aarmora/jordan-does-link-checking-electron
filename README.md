[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

[![Travis Build Status][build-badge]][build]
[![Dependencies Status][dependencyci-badge]][dependencyci]
[![Make a pull request][prs-badge]][prs]
[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE.md)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# Introduction

Bootstrapped from the awesome boilerplate made by Maxime Gris. See the boilerplate [here]( https://github.com/aarmora/jordan-does-link-checking-electron).

Currently runs with:

- Angular v8.0.0
- Electron v5.0.2
- Electron Builder v20.41.0

The goal of this is create a user friendly version of the [Dead Link Checker](https://github.com/aarmora/jordan-does-dead-link-checking).

## Getting Started

For development, it's as simple sa clone, `npm i` and `npm start`. Otherwise you should be able to download the files you program files that you want from relesaes.

## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window.
The Angular component contains an example of Electron and NodeJS native lib import.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Your application is optimised. Only /dist folder and node dependencies are included in the executable.**

## You want to use a specific lib (like rxjs) in electron main thread ?

You can do this! Just by importing your library in npm dependencies (not devDependencies) with `npm install --save`. It will be loaded by electron during build phase and added to the final package. Then use your library by importing it in `main.ts` file. Easy no ?

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? You can do it with `npm run ng:serve:web`.
**Note that you can't use Electron or NodeJS native libraries in this case.** Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.


[build-badge]: https://travis-ci.org/aarmora/jordan-does-link-checking-electron.svg?branch=master
[build]: https://travis-ci.org/aarmora/jordan-does-link-checking-electron
[dependencyci-badge]: https://dependencyci.com/github/aarmora/jordan-does-link-checking-electron/badge
[dependencyci]: https://dependencyci.com/github/aarmora/jordan-does-link-checking-electron
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg?style=flat
[license]: https://github.com/aarmora/jordan-does-link-checking-electron/blob/master/LICENSE.md
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/aarmora/jordan-does-link-checking-electron.svg?style=social
[github-watch]: https://github.com/aarmora/jordan-does-link-checking-electron/watchers
[github-star-badge]: https://img.shields.io/github/stars/aarmora/jordan-does-link-checking-electron.svg?style=social
[github-star]: https://github.com/aarmora/jordan-does-link-checking-electron/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20angular-electron!%20https://github.com/aarmora/jordan-does-link-checking-electron%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/aarmora/jordan-does-link-checking-electron.svg?style=social
