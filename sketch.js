//Create variables here
var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
 //load images here
 dogImg = loadImage("images/Dog.png");
 dogImg1 = loadImage("images/happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

  dog = createSprite (250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock); 
}

function draw() {  
 background(46,139,87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
  dog.addImage(dogImg1); 
 }
 
  drawSprites();
  //add styles here
   text("Food Remainig",200,200,30,30);
   textSize(100);
   fill("white");
   stroke(40);
}
  function readStock(data){
    foodS = data.val();
  }
  function writeStock(x){      
     if(x<=0){
       x=0;
       
     }
     else{
       x=x-1;
     }
     database.ref('/').update({
      Food:x
     })
  }



