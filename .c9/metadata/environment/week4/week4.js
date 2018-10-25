{"filter":false,"title":"week4.js","tooltip":"/week4/week4.js","undoManager":{"mark":14,"position":14,"stack":[[{"start":{"row":0,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["const { Client } = require('pg');","","// AWS RDS POSTGRESQL INSTANCE","var db_credentials = new Object();","db_credentials.user = 'aaron';","db_credentials.host = 'dsdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com';","db_credentials.database = 'mydb';","db_credentials.password = process.env.AWSRDS_PW;","db_credentials.port = 5432;","","// Connect to the AWS RDS Postgres database","const client = new Client(db_credentials);","client.connect();","","// Sample SQL statement to create a table: ","var thisQuery = \"CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);\";","// Sample SQL statement to delete a table: ","// var thisQuery = \"DROP TABLE aalocations;\"; ","// Sample SQL statement to query the entire contents of a table: ","// var thisQuery = \"SELECT * FROM aalocations;\";","","client.query(thisQuery, (err, res) => {","    console.log(err, res);","    client.end();","});"],"id":1}],[{"start":{"row":16,"column":0},"end":{"row":23,"column":17},"action":"remove","lines":["// Sample SQL statement to delete a table: ","// var thisQuery = \"DROP TABLE aalocations;\"; ","// Sample SQL statement to query the entire contents of a table: ","// var thisQuery = \"SELECT * FROM aalocations;\";","","client.query(thisQuery, (err, res) => {","    console.log(err, res);","    client.end();"],"id":2}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"remove","lines":[")"],"id":3},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"remove","lines":["}"]},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":15,"column":112},"end":{"row":16,"column":0},"action":"remove","lines":["",""],"id":4},{"start":{"row":15,"column":111},"end":{"row":15,"column":112},"action":"remove","lines":[";"]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":28},"action":"remove","lines":["aaron"],"id":5},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["d"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["a"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["n"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["g"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["r"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["u"]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["n"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["e"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["b"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["a"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["u"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["m"]}],[{"start":{"row":5,"column":23},"end":{"row":5,"column":70},"action":"remove","lines":["dsdemo.c2g7qw1juwkg.us-east-1.rds.amazonaws.com"],"id":6},{"start":{"row":5,"column":23},"end":{"row":5,"column":84},"action":"insert","lines":["dangrunebauminstance.cx049ocb21qa.us-east-2.rds.amazonaws.com"]}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":31},"action":"remove","lines":["mydb"],"id":7},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["d"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["a"]},{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["n"]},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["g"]},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["r"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["u"]},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["n"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":35},"action":"remove","lines":["dangrune"],"id":8},{"start":{"row":6,"column":27},"end":{"row":6,"column":39},"action":"insert","lines":["dangrunebaum"]}],[{"start":{"row":0,"column":33},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[" "],"id":13},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":[" "],"id":14}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":6},"action":"remove","lines":["var = "],"id":16}],[{"start":{"row":0,"column":33},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":17}],[{"start":{"row":15,"column":112},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["","client.query(thisQuery, (err, res) => {","    console.log(err, res);","    client.end();","});"],"id":20}]]},"ace":{"folds":[],"scrolltop":222.609375,"scrollleft":0,"selection":{"start":{"row":21,"column":3},"end":{"row":21,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":12,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1538514772076,"hash":"7393b9711cf3c9824414e35044a2cbb424865514"}