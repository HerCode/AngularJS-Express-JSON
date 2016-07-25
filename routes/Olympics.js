var router = require('express').Router();

var archery =[
  { Name: 'Mackenzie Brown', Origin: 'Flint, Texas' },
  { Name: 'Brady Ellison', Origin: 'Globe, Arizona' },
  { Name: 'Zach Garrett', Origin: 'Wellington, Missouri' },
  { Name: 'Jake Kaminski', Origin: 'Gainsville, Florida' }
];

var canoekayak =[
  { Name: 'Casey Eichfeld', Origin: 'Drums, Pennsylvania' },
  { Name: 'Maggie Hogan', Origin: 'Huntington Beach, California' },
  { Name: 'Devin McEwan', Origin: 'Salisbury, Connecticut' },
  { Name: 'Ashley Nee', Origin: 'Darnestown, Maryland' },
  { Name: 'Michal Smolen', Origin: 'Gastonia, North Carolina' }
];

var modpent =[
  { Name: 'Isabella Isaksen', Origin: 'Fayetteville, Arkansas' },
  { Name: 'Margeaux Isaksen', Origin: 'Fayetteville, Arkansas' },
  { Name: 'Nathan Schrimsher', Origin: 'Roswell, New Mexico' }
];

var syncswim = [
  { Name: 'Anita Alvarez', Origin: 'Kenmore, New York' },
  { Name: 'Mariya Koroleva', Origin: 'Concord, California' }
];

var taekwondo =[
  { Name: 'Jackie Galloway', Origin: 'Wylie, Texas' },
  { Name: 'Stephen Lambdin', Origin: 'Colleyville, Texas' },
  { Name: 'Steven Lopez', Origin: 'Sugar Land, TX' },
  { Name: 'Paige McPherson', Origin: 'Sturgis, TX' }
];

// constructor function

function athlete(name, location) {
  this.name = name;
  this.location = location;
}


//5 routes

router.get('/archery', function(request, response){
  var randomArchery = Math.floor(Math.random() * archery.length);
  response.send(archery[randomArchery]);
});

router.get('/canoekayak', function(request, response){
  var randomCanoekayak = Math.floor(Math.random() * canoekayak.length);
  response.send(canoekayak[randomCanoekayak]);
});

router.get('/modpent', function(request, response){
  var randomModpent= Math.floor(Math.random() * modpent.length);
  response.send(modpent[randomModpent]);
});

router.get('/syncswim', function(request, response){
  var randomSyncswim = Math.floor(Math.random() * syncswim.length);
  response.send(syncswim[randomSyncswim]);
});

router.get('/taekwondo', function(request, response){
  var randomTaekwondo = Math.floor(Math.random() * taekwondo.length);
  response.send(taekwondo[randomTaekwondo]);
});





module.exports = router;
