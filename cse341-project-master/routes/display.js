const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'pages', 'display.html'));
    res.json({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    console.log(res.firstName);
});



module.exports = router;