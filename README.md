# Is it AI-made?
###### a game which in you guess if the text on the screen is made by Ai or not
## [Live preview](https://is-text-ai-quiz.vercel.app/)
![Screenshot of the website](https://raw.githubusercontent.com/EfeHasircioglu/is-text-ai-quiz/76dde475075c69c6e5fdd385cdc72b9d40fbf4e8/preview.png)
## Technologies used
- React.js
- Express
## Development process
With this being my first full-stack project, I store the texts in a JSON file and store them on the server. This was made so that scalability would be easier. The other functions like score management, and the logic of buttons to check if the player responded correctly, is in the frontend. I put most of the functionality on the frontend because as of now, I'm more comfortable with frontend. But in a project like this, a backend is crucial since if we want to increase the amount of texts, a backend will provide us with good scalability and since the text is not stored client-side, even if we had a lot of text, client performance won't be affected.
## In the future
In the future, maybe a server-side point calculation and a global high score system can be implemented.
