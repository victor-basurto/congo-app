var express = require('express');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Congo App' });
});

router.get('/mongoData', function(req, res, next) {

	var CONGO_DATA = 'mongodb://localhost:27017/congo_app';

	MongoClient.connect(CONGO_DATA, function( err, db ) {
		
		assert.equal(null, err);
		console.log( err );

		db.collection('congoData').find({}).toArray(function( err, docs ) {

			assert.equal(null, err);
			assert.equal(2, docs.length);

			console.log('found the following');
			console.dir(docs);

			res.send(docs);
			db.close();
		});
	});
});

module.exports = router;
