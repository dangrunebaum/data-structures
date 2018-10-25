// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');
 var streetAddresses = [];
// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('../week6/data/m05.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);
  
 
// print table cell elements
$('td').each(function(i, elem) {
   
// limit by attribute "style" then remove the break element and trim white space     
    if($(elem).attr("style")=="border-bottom:1px solid #e3e3e3; width:260px"){
    streetAddresses.push($(elem).html().split("<br>")[2].trim().split(',')[0]);
    //console.log(streetAddresses)
    
    }
    


});
//console.log(streetAddresses)
fs.writeFileSync('streetAddressesm05.txt', JSON.stringify(streetAddresses));