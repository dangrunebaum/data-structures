
# Final Assignments


  - AA Meetings Interface--http://localhost:8000/4.final-project/students/pm/daniel/aa2.html
  - Dear Diary Interface--http://localhost:8000/4.final-project/students/pm/daniel/auditory.html
  - Sensor Interface--http://localhost:8000/4.final-project/students/pm/daniel/sensor.html

(To be presented ahead of 12.17 class)


# Preparation

Preparation for these assignments was undertaken in previous classes and involved 1) scraping and cleaning data from the AA meetings website and posting it to an SQL database, 2) keeping a diary and posting it to a NoSQL database, and 3) connecting and maintaining an FSR sensor and running scripts and APIs needed to post data to an SQL database.  

# AA Meetings Interface

The AA map builds off previous class time spent scraping and cleaning data, posting it to an AWS EC2 database, querying the database to return a JSON, and using the data to visualize meetings in an interface. The interface utilizes a Leaflet map to show meetings as map locations with popups including information about meetings at each marker. Numerous challenges were encountered, from tasks as basic as negotiating a directory to more difficult processes like cleaning the data and running SQL queries. Coded with p5, the final interface filters the data to show only markers for meetings that take place in the remainder of the day at the time of the query. 

# Dear Diary Interface

My Dear Diary project is an Auditory Diary that captures varying sonic experiences over almost 2 months. Setting a wide definition, my goal was to see to what extent my observations divided into four kinds of experience: heard, listened, recorded and read. The Auditory Diary includes 3 information fields: date/time, text entries, and "type," which categorizes which of the four experiences each entry is. The interface places text entries in line on a Y axis. Text entries are coded by 4 colors to represent type of experience: heard = red, listened = orange, recorded = blue, and red = green. A hypertext link brings users to a Dropbox folder housing MP3 files of the actual field recordings. 

# Sensor Interface

The initial plan was to use my Force Sensitive Resistor to measure my cat's sleeping patterns. However, experimentation revealed difficulty in obtaining reliable measurements, leading me to reorient the project to a meal observation project. Placing a dish on the sensor while eating returned a rough approximation of the relative weight of meals. In the table query, this data was then averaged, producing a daily number. In the interface, this data is visualized by means of a bar graph and day record. 



# Reliability, Scalability, Maintainability

##### Reliability
For the AA meetings, problematic initial data meant that to create a reliable database significant cleaning was required. Regarding the auditory diary, human reliability (my own) was an issue regarding data gathering. An unreliable sensor and spotty Wifi also presented challenges to reliability with the sensor project, as did a lack of redundancy. The Particle Cloud was dependable however, with API calls reliably returning data. As for the final interfaces, reliability depends on my own hardware and software, as I host the projects locally. While fault tolerance is low, usage is even lower. 

##### Scalability
Thinking about scalability for these projects means imagining scenarios like a nationwide AA meeting map, a diary project that takes on aspects of a Wordpress-style content management system, or an industrial scale sensor project. Fan-out and response time would likely be a problem only for the diary, where many people would follow others' posts and vice-versa, meaning scaling out could be required. If response time is critical to safety in an industrial sensor project (e.g. a nuclear power plant), scaling out could be a necessity here too.

##### Maintainability
As all three systems are relatively simple, operability presents little challenge for all these projects. With a clearly written user manual and programming knowledge it seems probably any person could take over these systems and continue to gather data, post to the database and query to return it to the interfaces. These projects also have the potential to evolve, for example adding new data points to the AA meetings and diary projects, or reorienting the sensor to measure something different. Databases and interfaces would have to be reconstructed, but this doesn't seem insurmountable given their essential simplicity. 

# Takeaways 

These projects presented a steep learning curve both conceptually and in practical terms. Challenges began with simply navigating new platforms like Github and AWS. Completing assignments with no programming experience and a minimal grasp of JavaScript proved extremely difficult, and much assistance was required. However, the experience of working with different types of data, data structures and databases and the software needed to create and access them provided valuable insight into the basic architecture of data management and the internet. 

