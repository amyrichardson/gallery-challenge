const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM images ORDER BY id';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
});

router.put('/:id', (req, res) => {
    let queryText = 'SELECT hearts FROM images WHERE id = $1';
    pool.query(queryText, [req.params.id])
        .then((result) => {
            let hearts = result.rows[0].hearts;
            hearts++;
            let newQuery = 'UPDATE images SET hearts = $1 WHERE id = $2' ;
            pool.query(newQuery, [hearts, req.params.id])
                .then((result) => {
                    res.sendStatus(200);
                })           
        })
        .catch((error) => {
            res.sendStatus(500);
        })
})


module.exports = router;