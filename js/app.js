console.log('Sanity Check: JS is working!');

$(document).ready(function(){

  // select a template script, and pull out the handlebars and html inside it
  var source = $('#student-li-template').html();
  console.log(source);

  // compile the handlebars template
  var template = Handlebars.compile(source);

  // use the template function from handlebars to create an HTML string
  // the template function takes in an object where:
    // each key is a variable the html template expects
    // each key's value is the data we want that variable to have
  var studentHtml27 = template({ students: data27.students });

  var studentHtml28 = template({ students: data28.students });

  // append html to the view
  $("#students-list").append(studentHtml27);
  $("#students-list").append(studentHtml28);

});

var data28 = {
  school: "General Assembly",
  name: "Web Development Immersive",
  cohort: 28,
  room: 2,
  github_schedule: "https://github.com/sf-wdi-27-28/schedule-28",
  instructors: [
    "Juliana Lopker",
    "Nathan Allen",
    "Justin Castilla"
  ],
  students: [
    {
      id: 0,
      last_name: "Vilhauer",
      first_name: "Matthew",
      github_username: "matthewvilhauer"
    },
    {
      id: 1,
      last_name: "Beck",
      first_name: "Adam",
      github_username: "mradambeck"
    },
    {
      id: 2,
      last_name: "Brown",
      first_name: "Ameer",
      github_username: "ameer-brown"
    },
    {
      id: 3,
      last_name: "Kliger",
      first_name: "Bob",
      github_username: "bkliger"
    },
    {
      id: 4,
      last_name: "Moses",
      first_name: "Emily",
      github_username:"eamoses"
    },
    {
      id: 5,
      last_name: "Zuniga",
      first_name: "Franklin",
      github_username: "Franklinz23"
    },
    {
      id: 6,
      last_name: "Lam",
      first_name: "Christine",
      github_username: "lamchristine"
    },
    {
      id: 7,
      last_name: "Tam",
      first_name: "Justin",
      github_username: "jtam11"
    },
    {
      id: 8,
      last_name: "Quach",
      first_name:  "Lotus",
      github_username: "lsquach"
    },
    {
      id: 9,
      last_name: "Carlson",
      first_name: "Melissa",
      github_username: "melicarls"
    },
    {
      id: 10,
      last_name: "Silverberg",
      first_name: "Michael",
      github_username: "mbd-s"
    },
    {
      id: 11,
      last_name: "Sharif",
      first_name: "Morgan",
      github_username: "morgansharif"
    },
    {
      id: 12,
      last_name: "Huang",
      first_name: "Samuel",
      github_username: "samuel1008"
    },
    {
      id: 13,
      last_name: "Madrid",
      first_name: "Scott",
      github_username:"samadrid92"
    },
    {
      id: 14,
      last_name: "Van Ho",
      first_name: "Sean",
      github_username: "seanvsville"
    },
    {
      id: 15,
      last_name: "Tekanyo",
      first_name: "Jim",
      github_username: "jimhantrix"
    },
    {
      id: 16,
      last_name: "Vaisler",
      first_name: "Hila",
      github_username: "hilava"
    },
    {
      id: 17,
      last_name: "Schwab",
      first_name: "Anna",
      github_username: "cloverharvest"
    },
    {
      id: 18,
      last_name: "Kitagawa",
      first_name: "Chiyuki",
      github_username: "chyktgw"
    },
    {
      id: 19,
      last_name: "Villagran",
      first_name: "Adriana",
      github_username: "AdrianaVillagran"
    }
  ]
};
