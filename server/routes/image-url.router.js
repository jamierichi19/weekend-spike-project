const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body.imageUrl)
    const imageUrl = req.body.imageUrl
    const id = req.user.id;
    const queryString = `INSERT INTO "image" (image_url, user_id) VALUES ($1, $2);`;
    pool.query(queryString, [imageUrl, id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
});

module.exports = router;