# [React + Redux App]

**About The Project**
This project is Reactjs + Redux application using API of Themoviedb.


**Buid with**
- ReactJS
- Redux


**Installation**
- Clone this repo
- `npm install` to install all required dependencies
- `npm run start` to start the local server
- `npm run build` to create production build


**Demo Server**

URL: https://dashboard.heroku.com/apps/movie-buzz-app

Autodeployment is setup with heroku


**Directory Structure:**
```
src/
-- components/ (UI element components)
-- config/ (Contains all configuration (API endpoints and Keys))
-- constants/ (Constant files of language content and Redux)
-- containers/ (Main App component and common header & footer components)
-- pages/ (This folder contains all page components)
-- reducers/ (Reducers for all APIs)
-- utils/ (Common Utilities)
```

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - List of genres
    - List of movies pulled from either Feed, or by Tag
    - Pagination for list of movies
- Article page (URL: /#/movie/movie-id-here )
    - Shows all the information of movies such as title, banner, overview, genre, productions etc
    - Render markdown from server client side
