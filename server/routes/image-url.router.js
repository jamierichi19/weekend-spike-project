const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')


/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('req.user:', req.user);
    pool.query(`SELECT * FROM "image" WHERE "user_id" = $1;`, [req.user.id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error GETTING shelf:', error);
            res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body.imageUrl)
    const imageUrl = req.body.imageUrl
    const id = req.user.id;
    const queryString = `INSERT INTO "image" (image_url, user_id) VALUES ($1, $2);`;
    pool.query(queryString, [imageUrl, id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
});

module.exports = router;