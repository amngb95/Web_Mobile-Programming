/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://anvesh95:Prathyusha@11@ds137703.mlab.com:37703/nlp_database';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("nlp_database");
    var myquery = {address: 'Main Road 989'};
    dbase.collection("newCollection").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});
