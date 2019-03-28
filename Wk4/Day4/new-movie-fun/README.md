# no db review 

## frontend checklist

- package.json
    - main => server/
    - proxy => http://localhost:4000
- reset.css

### Folder Structure

- src/
    - App.js
    - index.js
    - components/
        - Header/
            - header.js
            - header.css
        - MovieList/
            - MovieList.js
            - MovieList.css
        - UserFavorites/
            - UserFavorites.js
            - UserFavorites.css
        - AddMovieForm/
            - MovieForm.js
            - MovieForm.css

### dependencies
- `axios`

## Backend Checklist

### Folder Structure

- server/
    - index.js
    - controller/
        - movieController.js
    - data/
        - data.json

### Endpoints

Get: (get all movies) `/api/movies`

Post: (add a movie) `/api/movies`

Put: (edit movies in list) `/api/movies/:id`

Delete: (delete this crap) `/api/movies/:id`

```js
{ 
    id, title, popularity, poster_path, overview, release_date;

}
```

### dependencies

- express
- body-parser
