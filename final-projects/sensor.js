
// set variables 
var sensor 

// load sensor json 
function preload(){
   sensor = loadJSON('data/sensor.json')
}


// set up canvas 
function setup(){
  createCanvas(2000, 1200)
  background(0)
  var x = 100
  var y = 100
  


//console.log(sensor);

// draw bars 
for (let i in sensor){
  fill("fuchsia");
  rect(x, y, sensor[i].sensorval, 20);
  // draw days 
  fill("fuchsia");
  textFont("Comic Sans MS");
  textStyle(BOLD);
  textAlign(RIGHT);
  textSize(16);
  text("Day" + sensor[i].sensorday, x - 20, y + 15);
  let val = sensor[i].sensorval.split(".");
  text(val[0], 1100, y + 15);
  y +=25

}
//draw titles 
  fill("fuchsia");
  textAlign(LEFT);
  textSize(24);
  text("Meal Saga: A Weighty Daily Average", 100, 50);
  textSize(16);
  text("Dishes were placed on a Force Sensitive Resistor during mealtime and the daily value averaged.", 100, y + 20);

}