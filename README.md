# Study Buddy
## UNC Coding Bootcamp Final Project 2-22-2019

Deployed App: https://studybuddyunc.herokuapp.com/

This is a flashcard-based study aid that allows the user to create an account, create a set of custom questions and answers, and then quiz themselves.

The app utilizes React.js as a front end framework and integrates sound effects as React elements controlled by conditional rendering and using the react-sound npm package.

The app also utilizes:
* Bootstrap and custom CSS for styling and animations
* Context to manage user registration and login

### Screenshots

![Studdy Buddy](/screencapture-studybuddyunc-herokuapp-2019-06-28-15_06_18.png)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-getQuestions-2019-06-28-15_14_29)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-getQuestions-2019-06-28-15_20_13)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-register-2019-06-28-15_09_36)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-register-2019-06-28-15_09_53)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-test-2019-06-28-15_22_07)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-test-2019-06-28-15_22_58)

![Studdy Buddy](screens/screencapture-studybuddyunc-herokuapp-test-2019-06-28-15_23_47)

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
