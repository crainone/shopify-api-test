//Mocks up the shopify server. Data here represents what's available for migration

var routes = require('express').Router();

var remoteData = {
	products:[
		{
			"id":11888256650,
			"title":"2x4",
			"body_html":"",
			"vendor":"crainone-api-test",
			"product_type":"",
			"created_at":"2017-08-22T19:53:29-04:00",
			"handle":"2x4",
			"updated_at":"2017-08-22T19:53:29-04:00",
			"published_at":"2017-08-22T19:52:34-04:00",
			"template_suffix":null,
			"published_scope":"global",
			"tags":"",
			"variants":[
				{
					"id":47516066314,
					"product_id":11888256650,
					"title":"Default Title",
					"price":"0.00",
					"sku":"25618",
					"position":1,
					"grams":0,
					"inventory_policy":"deny",
					"compare_at_price":null,
					"fulfillment_service":"manual",
					"inventory_management":"shopify",
					"option1":"Default Title",
					"option2":null,
					"option3":null,
					"created_at":"2017-08-22T19:53:29-04:00",
					"updated_at":"2017-08-22T19:53:29-04:00",
					"taxable":true,
					"barcode":"0256188739458",
					"image_id":null,
					"inventory_quantity":10,
					"weight":0.0,
					"weight_unit":"lb",
					"old_inventory_quantity":10,
					"requires_shipping":true
				}
			],
			"options":[
				{
					"id":14566810058,
					"product_id":11888256650,
					"name":"Title",
					"position":1,
					"values":["Default Title"]
				}
			],
			"images":[],
			"image":null
		},
		{
			"id":11888246794,
			"title":"Drill",
			"body_html":"",
			"vendor":"crainone-api-test",
			"product_type":"",
			"created_at":"2017-08-22T19:52:26-04:00",
			"handle":"drill",
			"updated_at":"2017-08-22T19:52:26-04:00",
			"published_at":"2017-08-22T19:52:07-04:00",
			"template_suffix":null,
			"published_scope":"global",
			"tags":"",
			"variants":[
				{
					"id":47516031562,
					"product_id":11888246794,
					"title":"Default Title",
					"price":"50.00",
					"sku":"",
					"position":1,
					"grams":0,
					"inventory_policy":"deny",
					"compare_at_price":"49.99",
					"fulfillment_service":"manual",
					"inventory_management":null,
					"option1":"Default Title",
					"option2":null,
					"option3":null,
					"created_at":"2017-08-22T19:52:26-04:00",
					"updated_at":"2017-08-22T19:52:26-04:00",
					"taxable":true,
					"barcode":"",
					"image_id":null,
					"inventory_quantity":1,
					"weight":0.0,
					"weight_unit":"lb",
					"old_inventory_quantity":1,
					"requires_shipping":true
				}
			],
			"options":[
				{
					"id":14566799434,
					"product_id":11888246794,
					"name":"Title",
					"position":1,
					"values":["Default Title"]
				}
			],
			"images":[],
			"image":null
		},
		{
			"id":11888221002,
			"title":"Hammer",
			"body_html":"h\n\u003ctable class=\"data\"\u003e\n\u003ctbody\u003e\n\u003ctr\u003e\n\u003ctd\u003e25618\u003c\/td\u003e\n\u003c\/tr\u003e\n\u003c\/tbody\u003e\n\u003c\/table\u003e\nmmer",
			"vendor":"crainone-api-test",
			"product_type":"",
			"created_at":"2017-08-22T19:49:44-04:00",
			"handle":"screw",
			"updated_at":"2017-08-22T19:51:03-04:00",
			"published_at":"2017-08-22T19:49:22-04:00",
			"template_suffix":null,
			"published_scope":"global",
			"tags":"",
			"variants":[
				{
					"id":47515923658,
					"product_id":11888221002,
					"title":"Default Title",
					"price":"0.00",
					"sku":"",
					"position":1,
					"grams":0,
					"inventory_policy":"deny",
					"compare_at_price":null,
					"fulfillment_service":"manual",
					"inventory_management":null,
					"option1":"Default Title",
					"option2":null,
					"option3":null,
					"created_at":"2017-08-22T19:49:44-04:00",
					"updated_at":"2017-08-22T19:49:44-04:00",
					"taxable":true,
					"barcode":"",
					"image_id":null,
					"inventory_quantity":1,
					"weight":0.0,
					"weight_unit":"lb",
					"old_inventory_quantity":1,
					"requires_shipping":true
				}
			],
			"options":[
				{
					"id":14566771082,
					"product_id":11888221002,
					"name":"Title",
					"position":1,
					"values":["Default Title"]
				}
			],
			"images":[],
			"image":null
		},
		{
			"id":11888261770,
			"title":"Light Bulb",
			"body_html":"",
			"vendor":"crainone-api-test",
			"product_type":"",
			"created_at":"2017-08-22T19:54:00-04:00",
			"handle":"light-bulb",
			"updated_at":"2017-08-22T19:54:00-04:00",
			"published_at":"2017-08-22T19:53:38-04:00",
			"template_suffix":null,
			"published_scope":"global",
			"tags":"",
			"variants":[
				{
					"id":47516091978,
					"product_id":11888261770,
					"title":"Default Title",
					"price":"0.00",
					"sku":"",
					"position":1,
					"grams":3,
					"inventory_policy":"deny",
					"compare_at_price":null,
					"fulfillment_service":"manual",
					"inventory_management":null,
					"option1":"Default Title",
					"option2":null,
					"option3":null,
					"created_at":"2017-08-22T19:54:00-04:00",
					"updated_at":"2017-08-22T19:54:00-04:00",
					"taxable":true,
					"barcode":"",
					"image_id":null,
					"inventory_quantity":1,
					"weight":0.1,
					"weight_unit":"oz",
					"old_inventory_quantity":1,
					"requires_shipping":true
				}
			],
			"options":[
				{
					"id":14566815498,
					"product_id":11888261770,
					"name":"Title",
					"position":1,
					"values":["Default Title"]
				}
			],
			"images":[],
			"image":null
		},
		{
			"id":11888216650,
			"title":"Nail",
			"body_html":"",
			"vendor":"crainone-api-test",
			"product_type":"",
			"created_at":"2017-08-22T19:49:14-04:00",
			"handle":"nail",
			"updated_at":"2017-08-22T19:51:59-04:00",
			"published_at":"2017-08-22T19:49:09-04:00",
			"template_suffix":null,
			"published_scope":"global",
			"tags":"",
			"variants":[
				{
					"id":47515912714,
					"product_id":11888216650,
					"title":"Default Title",
					"price":"0.00",
					"sku":"",
					"position":1,
					"grams":0,
					"inventory_policy":"deny",
					"compare_at_price":null,
					"fulfillment_service":"manual",
					"inventory_management":null,
					"option1":"Default Title",
					"option2":null,
					"option3":null,
					"created_at":"2017-08-22T19:49:14-04:00",
					"updated_at":"2017-08-22T19:49:14-04:00",
					"taxable":true,
					"barcode":"",
					"image_id":null,
					"inventory_quantity":1,
					"weight":0.0,
					"weight_unit":"lb",
					"old_inventory_quantity":1,
					"requires_shipping":true
				}
			],
			"options":[
				{
					"id":14566766474,
					"product_id":11888216650,
					"name":"Title",
					"position":1,
					"values":["Default Title"]
				}
			],
			"images":[
				{
					"id":31449460618,
					"product_id":11888216650,
					"position":1,
					"created_at":"2017-08-22T19:51:59-04:00",
					"updated_at":"2017-08-22T19:51:59-04:00",
					"width":554,"height":1300,
					"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2293\/7959\/products\/nail.jpg?v=1503445919",
					"variant_ids":[]
				}
			],
			"image":{
				"id":31449460618,
				"product_id":11888216650,
				"position":1,
				"created_at":"2017-08-22T19:51:59-04:00",
				"updated_at":"2017-08-22T19:51:59-04:00",
				"width":554,"height":1300,
				"src":"https:\/\/cdn.shopify.com\/s\/files\/1\/2293\/7959\/products\/nail.jpg?v=1503445919",
				"variant_ids":[]
			}
		},
		{
			"id":11888237322,
			"title":"Screw",
			"body_html":"It's a screw",
			"vendor":"crainone-api-test",
			"product_type":"",
			"created_at":"2017-08-22T19:51:29-04:00",
			"handle":"screw-1",
			"updated_at":"2017-08-22T19:51:29-04:00",
			"published_at":"2017-08-22T19:51:21-04:00",
			"template_suffix":null,
			"published_scope":"global",
			"tags":"",
			"variants":[
				{
					"id":47515986698,
					"product_id":11888237322,
					"title":"Default Title",
					"price":"0.00",
					"sku":"",
					"position":1,
					"grams":0,
					"inventory_policy":"deny",
					"compare_at_price":null,
					"fulfillment_service":"manual",
					"inventory_management":null,
					"option1":"Default Title",
					"option2":null,
					"option3":null,
					"created_at":"2017-08-22T19:51:29-04:00",
					"updated_at":"2017-08-22T19:51:29-04:00",
					"taxable":true,
					"barcode":"",
					"image_id":null,
					"inventory_quantity":1,
					"weight":0.0,
					"weight_unit":"lb",
					"old_inventory_quantity":1,
					"requires_shipping":true
				}
			],
			"options":[
				{
					"id":14566789066,
					"product_id":11888237322,
					"name":"Title",
					"position":1,
					"values":["Default Title"]
				}
			],
			"images":[],
			"image":null
		}
	]
};

//fields=id,images,title
routes.get('/admin/products.json', (req, res) => {
  res.status(200).json({ type : 'fake server', products : remoteData.products});
});

routes.get('/admin/products/count.json', (req, res) => {
  res.status(200).json({ type : 'fake server', count : remoteData.products.length });
});

routes.get('/admin/products/:product_id.json', (req, res) => {
  res.status(404).json({ type : 'fake server', errors : "Not Found" });
  res.status(200).json({ type : 'fake server', product : remoteData.products[0] });
});

routes.post('/admin/products.json', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.put('/admin/products/:product_id.json', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.delete('/admin/products/:product_id.json', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;