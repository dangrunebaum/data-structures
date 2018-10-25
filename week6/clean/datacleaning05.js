// require modules
var fs = require('fs');
var cheerio = require('cheerio');

// read zone file
var content = fs.readFileSync('../data/m05.txt');

// load to an object
var $ = cheerio.load(content);
// $ for selecting variables

// create an array to store all the addresses & latlon
var m05data =   fs.readFileSync('../../week3/m05LatLon.json');
var m05 = JSON.parse(m05data);

// location
$('h4[style="margin:0;padding:0;"]').each(
  function(i,elem){

   var locationName=  $(elem).text().trim().replace(/'/g,"''");
 if( locationName !=''){
       m05[i].mtlocation=locationName;
       
   }else{
        m05[i].mtlocation=null;
   }
   // console.log(locationName);
  });
  
  


// meeting group
$('td[style="border-bottom\\:1px solid #e3e3e3; width\\:260px"]').each(
  function(i,elem){
    var group = $(elem).find('b').text().trim().split(" -")[0].replace(/\s\s/g,'').replace(/-/g,' ').trim().replace(/'/g,"''");
    // remove empty lines and extra spaces
    m05[i].group=group;
    // add each meeting group as a json object to the array
  }
);

// wheelchair
$('td[style="border-bottom\\:1px solid #e3e3e3; width\\:260px"]').each(
  function(i,elem){
    var wheelchairAccess = $(this).find('span').html(); // find span element
    if (wheelchairAccess == null) {
      m05[i].wheelchair = false;
    } else {
      m05[i].wheelchair = true;
    }
    // add each wheelchair access as a json object to the array
  }
);

// day
$('td[style="border-bottom\\:1px solid #e3e3e3;width\\:350px;"]').each(
  function(i,elem){
    var sections = $(this).html().replace(/^\s*$[\n\r]{1,}/gm, '').replace(/\s+/g,'').split('<br><br>');
    // remove empty lines and extra spaces and split each day
    // console.log(sections);
    var day=[];
    for (var j=0; j<sections.length; j++){
      var sec = sections[j].split('<b>')[1];
      if (sec != undefined){
        day.push(sec.substring(0, sec.indexOf('sFrom')));
        // console.log(sec);
      }
    }
    //
    //add each day as a json object to the array
    // console.log(m05[i]);
    m05[i].day = day;
  }
);

// schedule
$('td[style="border-bottom\\:1px solid #e3e3e3;width\\:350px;"]').each(
  function(i,elem){
    var sections = $(this).html().replace(/^\s*$[\n\r]{1,}/gm, '').replace(/\s+/g,' ').split('<br> <br>');
    // remove empty lines and extra spaces and split each day
    // console.log(sections);
    var start=[];
    var end=[];
    for (var j=0; j<sections.length; j++){

      var st = sections[j].split('</b>')[1];
      var et = sections[j].split('</b>')[2];
      if (st != undefined && et != undefined){
        start.push(st.substring(1, st.indexOf(' <')));
        end.push(et.substring(1, et.indexOf(' <')))
        // console.log(sec);
      }
      // type.push(sections[i].split('<b>')[2].substring(13,indexOf(' =')));
      // spinterest.push(sections[i].split('<b>')[3].substring(17)));
    }
    // console.log(start);
    // console.log(end);
    // add each time schedule as a json object to the array
    m05[i].start = start;
    m05[i].end = end;
  }
);

// type $ special interest
 $('td[style="border-bottom\\:1px solid #e3e3e3;width\\:350px;"]').each(function(i,elem){

    var sections = $(this).text().trim().replace(/\A*.*Meeting /g, '').split(/\s\s+/g)//.replace(/=\\?.*/g, '')//.trim().split(" ");
        var typeofAA=[];
        var specialIn=[];
       	var tpStr = "Type";
        	var spStr = "Special Interest";
            for (var j=0; j< sections.length; j++){
                if (sections[j].includes(tpStr)){
                typeofAA.push(sections[j].replace(/\A*.*Type /g, '').replace(/=\\?.*/g, '').trim());
                }else {
                    typeofAA.push('null')
                }
                if (sections[j].includes(spStr)){
                     specialIn.push(sections[j].replace(/\A*.*Special Interest /g, ''));
                }else{
                    specialIn.push('null')
                    }
        }
     //console.log(sections);
    //  console.log(typeofAA)
     m05[i].type = typeofAA;
      m05[i].spinterest = specialIn;
      //console.log(specialIn);
 });


fs.writeFileSync('m05update.json', JSON.stringify(m05));
// save json file

//console.log(m02);