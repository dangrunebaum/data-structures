var aa2obj;

function preload() {
    // load the JSON 
    aa2obj = loadJSON('data/aa2.json');
}




function setup() {
    // Call map initialization function 
    setupMap()
    background(0);
//    console.log(aa2obj);
}

function setupMap() {
    
    let now = new Date(); // current date/time 
    let dayNum = { // translate numbers to day names 
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };
    // create map
    let mymap = L.map('aa2-map').setView([40.734636, -73.978356], 13);

    // load map tile, set zoom 
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        // accessToken
        accessToken: 'pk.eyJ1Ijoidm9ucmFtc3kiLCJhIjoiY2pveGF0aDV2MjIyOTNsbWxlb2hhMmR4dCJ9.JJdYD_jWgRwUeJkDWiBz3w'
    }).addTo(mymap);

    for (let i in aa2obj) { // loop through keys of json object 0, 1, 2...
        let found = false; // becomes true if meeting found on same day after current time for this location 
        let displayString = aa2obj[i].address;
        if (aa2obj[i].mtlocation !== "null") {
            displayString += "<br>" + aa2obj[i].mtlocation; // if not null add location string 
        }

        aa2obj[i].meetings.forEach( // loop through meetings 
            (meeting) => {
                let time = meeting.time;
                let hr = +time.substring(0, time.indexOf(":")); // get hours from meeting time 
                hr += (~time.indexOf("PM")) ? 12 : 0; // add 12 to times with PM 
                let meetingDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hr, 0, 0, 0); // date/time of meeting itself 
                if (dayNum[now.getDay()] === meeting.day && meetingDate - now > 0) { // filter on same day with time after now 
                    if (!found) displayString += "<br>"; // add break before time
                    displayString += "<br>" + time; // put time on list
                    found = true; // set flag as above 
                }
            }
        );
        if (found)
            L.marker([aa2obj[i].lat, aa2obj[i].long]).bindPopup(displayString).addTo(mymap); // add marker with times if any match 
    }
    var marker = new L.marker([40.792190, -74.060459], {
        opacity: 0.01
    }); // create marker for map heading 
    marker.bindTooltip("Meetings after " + dayNum[now.getDay()] + " " + now.getHours() + "00 hrs", {
        permanent: true,
        className: "my-label",
        offset: [0, 0]
    });
    marker.addTo(mymap);
}