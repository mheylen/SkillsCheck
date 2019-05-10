const express = require('express')
const app = express()
const bodyParcer = require("body-parser");
const massive = require("massive");
require('dotenv').config()
app.use(bodyParcer.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    db.init();
    console.log('connected to db');
});


// app.get('/api/students', (req, res, next) => {
//     // get database instance
//     const db = req.app.get('db');
//     // run db quiery to get all students from the db
//     db.query('select * from students').then(students => {
//         //THEN when back with the response from the database,  send students array to front
//         res.status(200).send(students);
//     });
// });

app.get('/api/students', (req, res, next) => {
    const db = req.app.get('db');
    db.get_all_students()
    .then(students => {
    res.status(200).send(students);
    });
});

app.put('/api/students/:id', (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const {name, cohort, campus} = req.query
    db.update_student_by_id([id, name, cohort, campus]).then(students => {
        res.status(200).send(students);
    })
    .catch(err=> console.log(err));
});

const PORT = 4000;
app.listen(PORT, () => console.log(`whatever you want with ${PORT}`
    )
);

