const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM images';
    pool.query(queryText)
        .then((result) => {
            console.log('result of get images: ', result);
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
})


module.exports = router;