const { Client } = require('pg');
var async = require('async');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'dangrunebaum';
db_credentials.host = 'dangrunebauminstance.cx049ocb21qa.us-east-2.rds.amazonaws.com';
db_credentials.database = 'newaadatabase2';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var addressesForDb = [{
  "address": "122 E 37TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7483929",
    "Longitude": "-73.9787906"
  },
  "location": "",
  "group": "AA LITERATURE",
  "wheelchair": false,
  "day": ["Sunday"],
  "start": ["6:15 PM"],
  "end": ["7:15 PM"],
  "type": ["C"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "30 E 35TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7479892",
    "Longitude": "-73.9817564"
  },
  "location": "",
  "group": "BREAKFAST CLUB",
  "wheelchair": false,
  "day": ["Tuesday", "Wednesday", "Thursday", "Friday", "Monday"],
  "start": ["7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM"],
  "end": ["8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM"],
  "type": ["S", "OD", "O", "OD", "OD"],
  "spinterest": ["null", "null", "null", "null", "null"],
  "zone": 5
}, {
  "address": "350 E 56TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.757654",
    "Longitude": "-73.963834"
  },
  "location": "Cathedral High School",
  "group": "CARLYLE",
  "wheelchair": false,
  "day": ["Monday", "Wednesday"],
  "start": ["5:45 PM", "5:45 PM"],
  "end": ["6:45 PM", "6:45 PM"],
  "type": ["B", "B"],
  "spinterest": ["null", "null"],
  "zone": 5
}, {
  "address": "619 LEXINGTON AVE, New York, NY",
  "latLon": {
    "Latitude": "40.7588016",
    "Longitude": "-73.9704542"
  },
  "location": "St. Peter''s Lutheran Church @ Citicorp Center",
  "group": "CITY GROUP",
  "wheelchair": false,
  "day": ["Thursday", "Monday", "Wednesday", "Friday", "Monday", "Monday", "Tuesday", "Thursday", "Wednesday", "Wednesday", "Thursday", "Friday", "Friday", "Tuesday"],
  "start": ["7:30 AM", "7:30 AM", "7:30 AM", "7:45 AM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM"],
  "end": ["8:30 AM", "8:30 AM", "8:30 AM", "8:45 AM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM"],
  "type": ["OD", "S", "OD", "B", "B", "S", "B", "O", "B", "S", "B", "B", "BB", "S"],
  "spinterest": ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  "zone": 5
}, {
  "address": "122 E 37TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7483929",
    "Longitude": "-73.9787906"
  },
  "location": "",
  "group": "COURAGE TO CHANGE",
  "wheelchair": false,
  "day": ["Sunday", "Sunday", "Sunday", "Monday", "Tuesday", "Tuesday", "Wednesday", "Wednesday", "Thursday", "Friday", "Friday"],
  "start": ["12:45 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "7:30 PM"],
  "end": ["1:45 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "8:30 PM"],
  "type": ["S", "B", "C", "B", "B", "S", "BB", "C", "C", "B", "OD"],
  "spinterest": ["First Step Workshop", "null", "Promises", "null", "null", "null", "null", "null", "null", "null", "null"],
  "zone": 5
}, {
  "address": "28 E 35TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.748023",
    "Longitude": "-73.9818371"
  },
  "location": "J.H. Holmes Community House",
  "group": "EMPIRE STATE",
  "wheelchair": false,
  "day": ["Monday", "Wednesday", "Friday"],
  "start": ["12:15 PM", "12:15 PM", "12:15 PM"],
  "end": ["1:15 PM", "1:15 PM", "1:15 PM"],
  "type": ["C", "S", "B"],
  "spinterest": ["null", "null", "null"],
  "zone": 5
}, {
  "address": "350 E 56TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.757654",
    "Longitude": "-73.963834"
  },
  "location": "Cathedral High School",
  "group": "GOTHAM",
  "wheelchair": false,
  "day": ["Sunday", "Sunday", "Tuesday"],
  "start": ["5:30 PM", "5:30 PM", "5:45 PM"],
  "end": ["6:30 PM", "6:30 PM", "6:45 PM"],
  "type": ["B", "S", "OD"],
  "spinterest": ["null", "null", "null"],
  "zone": 5
}, {
  "address": "283 LEXINGTON AVE, New York, NY",
  "latLon": {
    "Latitude": "40.7479969",
    "Longitude": "-73.9783809"
  },
  "location": "Soldiers, Sailors, Marines &amp; Airmen''s Club",
  "group": "GRAND CENTRAL",
  "wheelchair": false,
  "day": ["Monday", "Tuesday", "Friday", "Wednesday", "Thursday"],
  "start": ["5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM"],
  "end": ["6:30 PM", "6:30 PM", "6:30 PM", "6:30 PM", "6:30 PM"],
  "type": ["B", "S", "C", "BB", "OD"],
  "spinterest": ["null", "null", "First Step Workshop", "null", "null"],
  "zone": 5
}, {
  "address": "122 E 37TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7483929",
    "Longitude": "-73.9787906"
  },
  "location": "",
  "group": "GRUPO BRASIL",
  "wheelchair": false,
  "day": ["Wednesday", "Friday"],
  "start": ["8:00 PM", "8:00 PM"],
  "end": ["9:00 PM", "9:00 PM"],
  "type": ["S", "OD"],
  "spinterest": ["null", "null"],
  "zone": 5
}, {
  "address": "619 LEXINGTON AVE, New York, NY",
  "latLon": {
    "Latitude": "40.7588016",
    "Longitude": "-73.9704542"
  },
  "location": "St. Peter''s Lutheran Church @ CitiCorp Center",
  "group": "LIFE LINE",
  "wheelchair": true,
  "day": ["Monday", "Friday"],
  "start": ["5:30 PM", "5:30 PM"],
  "end": ["6:30 PM", "6:30 PM"],
  "type": ["B", "OD"],
  "spinterest": ["null", "null"],
  "zone": 5
}, {
  "address": "141 E 43RD ST, New York, NY",
  "latLon": {
    "Latitude": "40.7518754",
    "Longitude": "-73.9747248"
  },
  "location": "Saint Agnes Church",
  "group": "LUNCH BUNCH",
  "wheelchair": true,
  "day": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "start": ["12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM"],
  "end": ["1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM", "1:30 PM"],
  "type": ["B", "C", "S", "C", "B"],
  "spinterest": ["null", "null", "null", "null", "null"],
  "zone": 5
}, {
  "address": "122 E 37TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7483929",
    "Longitude": "-73.9787906"
  },
  "location": "MUSTARD SEED",
  "group": "LUNCHTIME EXPRESS AT THE MUSTARD SEED",
  "wheelchair": false,
  "day": ["Wednesday"],
  "start": ["12:30 PM"],
  "end": ["1:15 PM"],
  "type": ["O"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "122 E 37TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7483929",
    "Longitude": "-73.9787906"
  },
  "location": "Mustard Seed",
  "group": "MEDITATION SATURDAY NIGHT",
  "wheelchair": false,
  "day": ["Saturday"],
  "start": ["7:30 PM"],
  "end": ["8:30 PM"],
  "type": ["null"],
  "spinterest": ["Eleventh Step Meditation"],
  "zone": 5
}, {
  "address": "141 E 43RD ST, New York, NY",
  "latLon": {
    "Latitude": "40.7518754",
    "Longitude": "-73.9747248"
  },
  "location": "St. Agnes Church",
  "group": "MONDAY MEN",
  "wheelchair": false,
  "day": ["Monday", "Thursday", "Monday"],
  "start": ["6:15 PM", "6:15 PM", "7:15 PM"],
  "end": ["7:15 PM", "7:15 PM", "8:15 PM"],
  "type": ["B", "S", "C"],
  "spinterest": ["null", "null", "null"],
  "zone": 5
}, {
  "address": "209 MADISON AVE, New York, NY",
  "latLon": {
    "Latitude": "40.7486487",
    "Longitude": "-73.9821254"
  },
  "location": "Church of the Incarnation",
  "group": "MURRAY HILL",
  "wheelchair": false,
  "day": ["Monday"],
  "start": ["6:15 PM"],
  "end": ["7:15 PM"],
  "type": ["B"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "122 E 37TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7483929",
    "Longitude": "-73.9787906"
  },
  "location": "",
  "group": "MUSTARD SEED",
  "wheelchair": false,
  "day": ["Tuesday", "Thursday", "Wednesday", "Thursday", "Wednesday", "Tuesday", "Monday", "Tuesday", "Sunday", "Monday", "Friday", "Thursday", "Saturday", "Saturday", "Thursday", "Sunday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday", "Sunday", "Saturday", "Friday", "Saturday", "Sunday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday", "Sunday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Saturday", "Sunday", "Friday", "Thursday", "Wednesday", "Tuesday", "Wednesday", "Monday", "Tuesday", "Friday", "Saturday", "Tuesday", "Sunday", "Thursday", "Wednesday", "Monday", "Friday"],
  "start": ["6:15 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "8:00 AM", "8:00 AM", "8:00 AM", "8:15 AM", "9:30 AM", "9:30 AM", "9:30 AM", "9:30 AM", "9:30 AM", "9:30 AM", "9:30 AM", "9:30 AM", "10:00 AM", "11:00 AM", "11:30 AM", "11:30 AM", "11:30 AM", "11:30 AM", "11:30 AM", "12:45 PM", "12:45 PM", "12:45 PM", "12:45 PM", "12:45 PM", "12:45 PM", "12:45 PM", "3:00 PM", "3:15 PM", "3:15 PM", "3:15 PM", "3:15 PM", "3:15 PM", "5:30 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "6:15 PM", "7:30 PM", "7:30 PM", "8:00 PM", "8:00 PM", "8:00 PM", "8:00 PM", "8:00 PM", "10:00 PM"],
  "end": ["7:15 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "8:30 AM", "9:00 AM", "9:00 AM", "9:00 AM", "9:15 AM", "10:30 AM", "10:30 AM", "10:30 AM", "10:30 AM", "10:30 AM", "10:30 AM", "10:30 AM", "10:30 AM", "11:00 AM", "12:00 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "12:30 PM", "1:45 PM", "1:45 PM", "1:45 PM", "1:45 PM", "1:45 PM", "1:45 PM", "1:45 PM", "4:00 PM", "4:15 PM", "4:15 PM", "4:15 PM", "4:15 PM", "4:15 PM", "6:30 PM", "7:00 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "7:15 PM", "8:30 PM", "8:30 PM", "9:00 PM", "9:00 PM", "9:00 PM", "9:00 PM", "9:00 PM", "11:00 PM"],
  "type": ["BB", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "S", "C", "C", "BB", "BB", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "S", "C", "C", "C", "C", "C", "C", "B", "B", "B", "C", "C", "B", "BB", "B", "S", "OD", "null", "C", "B", "C", "S", "B", "OD"],
  "spinterest": ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "Daily Reflections", "Daily Reflections", "Daily Reflections", "Daily Reflections", "null", "null", "null", "Daily Reflections", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "First Step Workshop", "Women", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "Meditation", "null", "null", "Men", "null", "Women", "null"],
  "zone": 5
}, {
  "address": "619 LEXINGTON AVE, New York, NY",
  "latLon": {
    "Latitude": "40.6894374",
    "Longitude": "-73.9367705"
  },
  "location": "St. Peter''s Lutheran Church @ CitiCorp Center",
  "group": "REBELLION DOGS",
  "wheelchair": true,
  "day": ["Tuesday"],
  "start": ["7:30 AM"],
  "end": ["8:30 AM"],
  "type": ["C"],
  "spinterest": ["Living Sober"],
  "zone": 5
}, {
  "address": "240 E 31ST ST, New York, NY",
  "latLon": {
    "Latitude": "40.6447249",
    "Longitude": "-73.948097"
  },
  "location": "Church of the Good Shepherd",
  "group": "SATURDAY EAST",
  "wheelchair": true,
  "day": ["Saturday"],
  "start": ["4:00 PM"],
  "end": ["5:00 PM"],
  "type": ["C"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "114 E 35TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7473169",
    "Longitude": "-73.9800724"
  },
  "location": "The New York New Church",
  "group": "SATURDAY STEP",
  "wheelchair": true,
  "day": ["Saturday"],
  "start": ["10:00 AM"],
  "end": ["11:00 AM"],
  "type": ["S"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "230 E 60TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7615607",
    "Longitude": "-73.9649474"
  },
  "location": "ALL SAINTS CHURCH",
  "group": "SERENITY EAST",
  "wheelchair": false,
  "day": ["Tuesday", "Friday", "Friday"],
  "start": ["7:30 AM", "6:30 PM", "8:00 PM"],
  "end": ["8:30 AM", "7:30 PM", "9:00 PM"],
  "type": ["BB", "S", "B"],
  "spinterest": ["null", "null", "null"],
  "zone": 5
}, {
  "address": "244 E 58TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7600925",
    "Longitude": "-73.9653811"
  },
  "location": "Caron Foundation",
  "group": "SERENITY EAST (:I)",
  "wheelchair": true,
  "day": ["Tuesday"],
  "start": ["5:30 PM"],
  "end": ["6:30 PM"],
  "type": ["BB"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "619 LEXINGTON AVE, New York, NY",
  "latLon": {
    "Latitude": "40.7588016",
    "Longitude": "-73.9704542"
  },
  "location": "St. Peter''s Lutheran Church @ CitiCorp Center",
  "group": "SILKWORTH WOMEN''S",
  "wheelchair": true,
  "day": ["Thursday"],
  "start": ["12:30 PM"],
  "end": ["1:30 PM"],
  "type": ["C"],
  "spinterest": ["Women"],
  "zone": 5
}, {
  "address": "325 PARK AVE, New York, NY",
  "latLon": {
    "Latitude": "40.7574552",
    "Longitude": "-73.9733937"
  },
  "location": "St. Bartholomew''s Church",
  "group": "ST. BART''S TWELVE THIRTIES",
  "wheelchair": false,
  "day": ["Friday", "Monday", "Wednesday"],
  "start": ["12:30 PM", "12:30 PM", "12:30 PM"],
  "end": ["1:30 PM", "1:30 PM", "1:30 PM"],
  "type": ["BB", "C", "S"],
  "spinterest": ["null", "null", "null"],
  "zone": 5
}, {
  "address": "236 E 31ST ST, New York, NY",
  "latLon": {
    "Latitude": "40.74314",
    "Longitude": "-73.9781525"
  },
  "location": "CHURCH OF THE GOOD SHEPARD",
  "group": "STRAIGHT 12",
  "wheelchair": false,
  "day": ["Saturday", "Saturday", "Saturday"],
  "start": ["6:00 PM", "7:15 PM", "8:30 PM"],
  "end": ["7:00 PM", "8:15 PM", "9:30 PM"],
  "type": ["C", "B", "OD"],
  "spinterest": ["Promises", "null", "null"],
  "zone": 5
}, {
  "address": "308 E 55TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.6501686",
    "Longitude": "-73.9254937"
  },
  "location": "Conservative Synagogue",
  "group": "TEMPLETON",
  "wheelchair": false,
  "day": ["Wednesday"],
  "start": ["6:15 PM"],
  "end": ["7:15 PM"],
  "type": ["OD"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "244 E 58TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7600925",
    "Longitude": "-73.9653811"
  },
  "location": "The Caron Foundation",
  "group": "TRAFALGAR",
  "wheelchair": true,
  "day": ["Tuesday"],
  "start": ["6:45 PM"],
  "end": ["7:45 PM"],
  "type": ["OD"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "244 E 58TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.6492925",
    "Longitude": "-73.9225408"
  },
  "location": "Caron Foundation",
  "group": "TUDOR",
  "wheelchair": true,
  "day": ["Thursday"],
  "start": ["6:15 PM"],
  "end": ["7:15 PM"],
  "type": ["OD"],
  "spinterest": ["null"],
  "zone": 5
}, {
  "address": "109 E 50TH ST, New York, NY",
  "latLon": {
    "Latitude": "40.7569178",
    "Longitude": "-73.97309"
  },
  "location": "",
  "group": "WOMEN''S ELEVENTH STEP",
  "wheelchair": true,
  "day": ["Wednesday"],
  "start": ["5:45 PM"],
  "end": ["7:15 PM"],
  "type": ["S"],
  "spinterest": ["null"],
  "zone": 5
}]

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
     var thisQuery = "INSERT INTO newaadatabase2 ( address,mtgroup,lat,long, mtlocation, wheelchair ,mtdate, mtstart, mtend, mttype,mtspin,mtzone) VALUES (E'"+value.address+"','"+value.group + "',"+value.latLong.Lat+ ","+ value.latLong.Lng+ ",'"+ value.mtlocation+"','"+value.wheelchair+ "','{"+ value.mtDate + "}','{" + value.start + "}','{"+ value.end +"}','{"+value.type+"}','{"+ value.spinterest+ "}',"+ value.zone+");";

    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 