var diaryEntries = [];

class DiaryEntry {
  constructor(primaryKey, date, time, description, type) {
    this.pk = {};
    this.pk.S = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.time = {};
    this.time.S = time; 
    this.description = {};
    this.description.S = description;
    this.type = {};
    this.type.S = type;
    this.month = {};
    this.month.N = new Date(date).getMonth().toString();
}

}

diaryEntries.push(new DiaryEntry(0, 'October 9, 2018', "12:01 AM", "Heard the sound of my apartment in the afternoon: whir of the city, click of doors closing, high pitched whine of ventilation system.", "mp3"));
diaryEntries.push(new DiaryEntry(1, 'October 9, 2018',"3:36 PM", "Recorded sound of subway commute.", "mp3"));
diaryEntries.push(new DiaryEntry(2, 'October 10, 2018', "10:51 PM", "Listened to Red Sox Yankees division championship series game 5.", "mp3"));
diaryEntries.push(new DiaryEntry(3, 'October 10, 2018', "10:50 AM", "Sampled YouTube videos in Open Culture article “42 hours of ambient sounds from blade runner, Alien, Star Trek and Doctor Who will help you relax.", "mp3"));
diaryEntries.push(new DiaryEntry(4, 'October 10, 2018', "2:09 PM", "Listened to Podcast: Alex from Tokyo@the Lot Radio", "mp3"));
diaryEntries.push(new DiaryEntry(5, 'October 10, 2018', "3:36 PM", "Read an article about a cross-dressing talent Ladybeard in Japan.", "mp3"));

//console.log(diaryEntries);

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};
params.Item = diaryEntries[0]; 
params.TableName = "auditorydiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var params = {};
params.Item = diaryEntries[1]; 
params.TableName = "auditorydiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var params = {};
params.Item = diaryEntries[2]; 
params.TableName = "auditorydiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var params = {};
params.Item = diaryEntries[3]; 
params.TableName = "auditorydiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var params = {};
params.Item = diaryEntries[4]; 
params.TableName = "auditorydiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var params = {};
params.Item = diaryEntries[5]; 
params.TableName = "auditorydiary";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
