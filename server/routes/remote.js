var express = require('express');

var router = express.Router();

router.get('/products/count.json', function (req, res, next) {
    response = {
        response_type : 'fake server',
        count : 11
    };
    console.log('response:' + JSON.stringify(response));
    res.json(response);
})

module.exports.remote = router;