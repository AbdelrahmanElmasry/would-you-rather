[![Netlify Status](https://api.netlify.com/api/v1/badges/f5d2641e-6d28-4ba2-aee7-4ac11e52e9f3/deploy-status)](https://app.netlify.com/sites/wouldyou-rather/deploys)

# Would you rather... React web game Project
This is Would you rahter Project.


To get started:

* install all project dependencies with
```console
npm install
```
* start the app with
```console
npm start
```
web app will be opened at http://localhost:3000 in the browser.


## App Functionality
This is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this app, users are able to ask and answer questions, see which questions they have/haven’t answered, see how other people have voted, and see the ranking of users on the leaderboard.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted. When the user comes back to the home page, the polling question appears in the “Answered” column.



## Technologies used:
* React
* Redux
* React Router
* Redux-thunk
* ant-design

## Demo 
try from [here](https://wouldyou-rather.netlify.app)

