# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project use @MUI for UI

## Setting Up The Project
In the project directory,

### MSAL Configuration
 In the project directory, Go to src/Components/MSAL/instance.js and replace the CLIENT_ID with azure microsoft entity application/client id.

 Similary in the same file replace the REDIRECT_URL with "http://localhost:3000" for local && any other URL in case of other environments


## Running the project
    In the project directory, run `npm start` command.
    After running the npm start go to any browser and open http://localhost:3000/.
    See more info && commands under Available Scripts section

## Signing in and Application Usage
    After intial load of application you should able to microsoft login button at the center of the button.
    By clicking on microsoft login button you will be able to open a popup which allows you to signin using the any microsoft account.
    After succssful signing user will able to be redirected to the dashbord with greetings of his/her name on header.

## Common Issues & Errors

### Seeing Failed to Autheticate User
    This error mostly causes due to incorrect instance configuration.
    Make sure to add the client id in instance and redirect uri that matches with home page.

### External User Error On Login Popup
    This error is because of incorrect configuration of microsoft azure application. If there is any organizational level authority requires you need to change authority url as well in the instance file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
