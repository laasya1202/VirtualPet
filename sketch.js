//Create variables here
var dog, dogimg, happyDog;
var foodS, foodStock;
var database;
function preload()
{
	//load images here
  dogimg = loadImage("Dog.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200, 200, 10, 10)
  dog.addImage(dogimg);
  fooodStock=database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}



