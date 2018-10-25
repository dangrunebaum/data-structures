const { Client } = require('pg');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'dangrunebaum';
db_credentials.host = 'mydatabaseinstance.cwsurmpmutgq.us-east-1.rds.amazonaws.com';
db_credentials.database = 'newaadatabase2';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to create a table: 
var thisQuery = `CREATE TABLE newaadatabase (id serial PRIMARY KEY,
                                           address VARCHAR(100),
                                           lat DOUBLE precision,
                                           long DOUBLE precision,
                                           mtgroup VARCHAR(100),
                                           mtlocation VARCHAR(100),
                                           wheelchair BOOLEAN,
                                           mtdate VARCHAR [],
                                           mtstart VARCHAR [],
                                           mtend VARCHAR [],
                                           mttype VARCHAR [],
                                           mtspin TEXT [],
                                           mtzone SMALLINT
                                           );`;

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});