// set variables 
var auditory
var description

// load table 
function preload(){
  auditory = loadJSON('data/auditory.json')
}



function setup(){
  createCanvas(2000, 1300)
  background(0)
  var y = 150



// console.log(auditory);

 // create color keys for type 
      let myColors = {
   "Heard": "red",
   "Listened": "orange",
   "Recorded": "blue",
   "Read": "green",
 }

  // write diary entries and dates, color according to key  
  for (let i in auditory){

  fill(myColors[auditory[i].type.S]);
  // console.log(auditory[i].type.S);
  textFont("DIN Alternate");
  textSize(18);
  text(auditory[i].description.S, 250, y);
  var d = new Date(+auditory[i].date.S) + "";
  text(d.substr(0, 21), 50, y);
  y += 35;
  }

  // draw title 
  fill(0, 255, 255);
  textSize(30);
  text("Auditory Diary: Heard, Listened, Recorded, Read", 50, 50);

  // draw legend
  fill("red");
  noStroke();
  rect(100, 80, 12, 12);
  textSize(14);
  text("Heard", 120, 91);
  fill("orange");
  rect(200, 80, 12, 12);
  text("Listened", 220, 91);
  fill("blue");
  rect(300, 80, 12, 12);
  text("Recorded", 320, 91);
  fill("green");
  rect(400, 80, 12, 12);
  text("Read", 420, 91);
  
  }

