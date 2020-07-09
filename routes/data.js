const express = require('express');
const router = express.Router();

let people = [
    {name: 'Daniel', age: 20},
    {name: 'Erika', age: 21},
    {name: 'Christian', age: 19},
    {name: 'Adrian', age: undefined},
    {name: 'Andres', age: undefined}
]

router.get('/api', (req, res) => {
    res.send(
    people
    );
})

router.get('/', (req, res) => {
    res.redirect('/data/api');
})

module.exports = router;