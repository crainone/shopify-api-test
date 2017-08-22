var express = require('express');
var config = require('config');
var request = require('request');

var router = express.Router();

router.post('/migrate', function (req, res, next) {
    request({
        uri: config.shopSource
    }).pipe(res);
  
  
	/*response = {
        response_type:'{Migration response placeholder}',
        shop_name:req.body.shop_name
    };
    console.log('response:' + JSON.stringify(response));
    res.end(JSON.stringify(response));*/
})

module.exports.api = router;