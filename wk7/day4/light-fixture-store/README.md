# Light Fixture e-commerce

## frontend

###dependencies
- axios
- react-router-dom (BrowserRouter)
- redux
- react-redux
- redux-promise-middleware

###components

- App.js
    - Header
    - ProductView
        - Products
    - Cart
        - Products
    - AdminView
        - AdminCard
        - PostingForm
    - Footer

### Routes
- ProductView => '/'
    - /product/:id
- Cart => '/cart'
- AdminView => '/admin'

### Redux
```js
const initialState = {
admin: null,
cart: [],
products: []
}
```

## backend

###dependencies
- express
- express-session
- massive
- dotenv
- bcrypt

###endpoint routes

**auth**
- login
- logout
- 


**admin**
- getAll: => /api/admin
- getOne: => /api/admin/:id
- get: => /api/admin
- post: => /api/admin
- put: => /api/admin/:id
- delete: => /api/admin/:id


***products***

- getAll: => /api/store
- get: => /api/store
- post: => /api/store
- put: => /api/store/:id
- delete: => /api/store/:id


### database Schema
- admin
```sql
create table admin(
    id serial primary key,
    username varchar(20) not null,
    password varchar(64) not null,
    full_name text
)

create table product(
    product_id serial primary key,
    name varchar(25) not null,
    price float not null,
    tax float not null,
    description text,
    image text,
    admin_id integer references admin(id)
)
```

###server file structure

- /server
    - index.js
    - controller/
        - productController.js
        - adminController.js
###dotenv
```text
SESSION_SECRET=
SERVER_PORT=
CONNECTION_STRING= (append => ?ssl=true)
```
