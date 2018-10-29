const { Client } = require('pg');
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'dangrunebaum';
db_credentials.host = 'dangrunebauminstance.cx049ocb21qa.us-east-2.rds.amazonaws.com';
db_credentials.database = 'dangrunebaum';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var request = require('request');
var fs = require('fs');
var insertZones = JSON.parse(fs.readFileSync('../week6/clean/m02.json'));




async.eachSeries(insertZones, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO dangrunebaum ( address,mtgroup,lat,long, mtlocation, wheelchair ,mtdate, mtstart, mtend, mttype,mtspin,mtzone) VALUES (E'"+value.streetAddress+"','"+value.group + "',"+value.lat+ ","+ value.long+ ",'"+ value.mtlocation+"','"+value.wheelchair+ "','{"+ value.day + "}','{" + value.start + "}','{"+ value.end +"}','{"+value.type+"}','{"+ value.spinterest+ "}',"+ value.zone+");";
    
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
});