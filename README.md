# odins-gaze

## Warning! This is a work in progress

The Odin Project - Intermediate JS project

SEE LIVE WORKING APP [HERE](http://hello-damiro.github.io/odins-gaze)

</br>

Ok, it's not find Waldo, its more like [hidden object game](https://en.wikipedia.org/wiki/Hidden_object_game). Basically same concept with Find Waldo. I want to be unique so bear with me. 😘

</br>

**Day 1**: As usual, design game interface in figma. Draft story line so that evrything I decide from this point onward will be based on this story line. Think of business logic. Create environment and research for appropriate tools to use.

**Day 2**: From this project onwards, my works should live in any type of screensize. Struggled with game image positioning with CSS. Considering that viewport size is literally different in every users, it felt theres no other way but to use percentage unit to adapt the items location in any situation.

**Day 3**: Solved the click events on image only. Always forgot that divs or any element works in layers. Getting comfortable with the use of `useContext` on its provider and its consumer sides. I dont think I need to use `useReducer` this time. But who knows, lets see on the upcomming days.

**Day 4**: Finished the game. But needs to add the features that will comply to the challenges. I ended up using `useReducer`. I feel I can do the code without using `useReducer`, but I use it anyway just for the sake of using it. I need to experience implementing these hooks for me to fully grasp it, specially the usecase of each hooks. Needs to finish the client side before I even attempt to start implementing the _BaaS_. Timer, game scene selection and pop-up modals/navigation. I'd probably start with the timer tomorrow since it has the direct connection with the game objects. Needs to focus more.

</br>

## Hooks Used

-   [x] useEffect
-   [x] useState
-   [x] useContext
-   [x] useReducer
-   [x] useRef

</br>

## Project screenshots

![Screenshot](https://github.com/hello-damiro/odins-gaze/blob/main/src/assets/screenshot.png?raw=true)

![Screenshot](https://github.com/hello-damiro/odins-gaze/blob/main/src/assets/screenshot_2.png?raw=true)

![Screenshot](https://github.com/hello-damiro/odins-gaze/blob/main/src/assets/screenshot_3.png?raw=true)

</br>

## Challenges

1. Think about what you’ll need to do to get this all working together. This is where it’s really helpful to think it completely through on paper or whiteboard ahead of time! A few minutes of thought can save you from wasting an hour of coding.
2. If you’re using Rails as your backend: create a new Rails application with just the bare bones required to load your HTML page for now. If you’ll be using Firebase, this is a good time to create a new Firebase project for this app, and link to the necessary scripts at the bottom of your HTML page.
3. Build the front end functionality without actually using any calls to the back end yet. Specifically, that means creating the JavaScript functionality which pops the targeting box and dropdown menu on the screen when the user clicks on the photo and removes it when the user clicks away.
4. Now hook up the functionality for validating with your back end whether the user has clicked in the right place for that character.
5. Tie it into your front end so you can seamlessly select characters, validate them, and place the appropriate markers on the map if the selection was correct.
6. Add in the ability to time the user from when they first load the page and then display their “score” (time) when they successfully identify all characters. Create a popup that asks them to enter their name for the high scores table if they have earned it.
7. Push your solution to GitHub, Heroku, and/or Firebase Hosting and submit it below. This is a serious project, congratulations!
8. Load many images into your database and allow the user to select from them before starting the game.
