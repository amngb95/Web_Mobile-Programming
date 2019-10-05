/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://anvesh95:Prathyusha@11@ds137703.mlab.com:37703/nlp_database'; //mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        console.log("Connected correctly to server");
        db.close();
    }
)
;
