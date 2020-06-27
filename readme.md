# Travel App

## Overview

This project aims to provide weather checking for users who want to go to a place for travel.

You can enter your destination city and the date, and then you can get the weather info.

## Instructions

Please input correct city name and date format to get the weather info.

## Dependencies

The following dependencies are used: `dotenv`,`express`,
`webpack`,`webpack-cli` in the build environment. If you want to check the dependencies used in the dev environment, refer to the **devDependencies** field in the `package.jso`n file.

## Importance Files

Read the `readme.md` file before you move on. There are some files worth your attention. The `webpack.build.js` and `webpack.dev.js` are used to configure the build environment and dev environment respectively, where you can find all the required module rules and plugins. The `package.json` file is used to define scripts and dependencies used for the build environment and dev environment.

## How to Start

Start the app in build mode:

1. Change your current directory to the directory where your app is stored.

2. Enter the `npm run build` command, and the **dist** folder is generated.

3. Enter the `npm start` command, and the server is started.

4. Go to the [link](http://localhost:8081) to start using your app.


Start the app in dev mode:

1. Change your current directory to the directory where your app is stored.

2. Enter the `npm run dev` command, and the webpack server is started. The app opens a new page on your browser. Start using your app.

## References

1. For more info about **Jest**, refer to [Getting Started](https://jestjs.io/docs/en/getting-started).

2. For more info about **Service Worker**, refer to [Debug Service Worker](https://www.youtube.com/watch?v=tuRPSaSiK_c).

3. For more info about **Webpack Server**, refer to [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/).

4. For more info about **Babel**, refer to [Babel Loader](https://github.com/babel/babel-loader).

5. For more info about **Webpack Loaders**, refer to [Webpack Loaders](https://webpack.js.org/loaders/).