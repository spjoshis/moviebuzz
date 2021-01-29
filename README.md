# ![React App]

## Getting started
- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server (this project uses create-react-app)


**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of genres
    - List of movies pulled from either Feed, or by Tag
    - Pagination for list of movies
- Article page (URL: /#/movie/movie-id-here )
    - Shows all the information of movies such as title, banner, overview, genre, productions etc
    - Render markdown from server client side
