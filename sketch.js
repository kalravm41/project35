var database;

var form,voter,game,voterCount;
var gameState = 0;

function setup(){
  database = firebase.database();
 // console.log(database);
  createCanvas(500,500);
}
function draw(){
  form = new Form();
  form.display();
}