var express = require('express'), // npm install express
    app = express();
const { Pool } = require('pg');
var AWS = require('aws-sdk');

// AWS RDS credentials
var db_credentials = new Object();
db_credentials.user = 'dangrunebaum';
db_credentials.host = 'dangrunebauminstance.cx049ocb21qa.us-east-2.rds.amazonaws.com';
db_credentials.database = 'dangrunebaum';
db_credentials.password = '37Graygar';
db_credentials.port = 5432;



// respond to requests for /sensorData
app.get('/sensorData', function(req, res) {
    
    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);

    //SQL query 
    var q = `SELECT EXTRACT(DAY FROM sensorTime) as sensorday,
             AVG(sensorValue::int) as sensorVal 
             FROM sensorData
             WHERE sensorValue > 10
             GROUP BY sensorday
             ORDER BY sensorday;`;
    
    client.connect();
    client.query(q, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.send(qres.rows);
            client.end();
            console.log('1) responded to request for sensor data');
        }
    });
});

// // respond to requests for /aameetings
app.get('/aa2', function(req, res) {
    
    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);
    
    // SQL query 
       //      (address, mtgroup, lat, long, mtlocation, wheelchair , mtdate, mtstart, mtend, mttype, mtspin, mtzone) 

    var thisQuery = `SELECT address, mtlocation, json_agg(json_build_object('day', mtdate, 'time', mtstart)) as meetings
                 FROM aa2 
                 WHERE mtdate = 'Tuesday'
                 GROUP BY address, mtlocation
                 ;`;

    client.query(thisQuery, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.send(qres.rows);
            client.end();
            console.log('2) responded to request for aa meeting data');
        }
    });
});

// respond to requests for /deardiary
app.get('/auditorydiary', function(req, res) {
// AWS DynamoDB credentials
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";
    // Connect to the AWS DynamoDB database
    var dynamodb = new AWS.DynamoDB();
    
    // DynamoDB (NoSQL) query
    var params = {
    TableName : "auditorydiary",
    KeyConditionExpression: "pk = :primaryKey", // the query expression
    ExpressionAttributeValues: { // the query values
        ":primaryKey": {S: "0"},
    }
};

    dynamodb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        }
        else {
            res.send(data.Items);
            console.log('3) responded to request for auditory diary data');
        }
    });

});

// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(8080, function() {
    console.log('Server listening...');
});