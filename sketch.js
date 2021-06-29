
var backgroundImg;

var snowman;

function setup() {
  createCanvas(800,400);
  snowman= createSprite(400, 200, 50, 50);
  backgroundImg=loadImage("snow1.jpg")

}
function preload(){
  snowmanImage=loadImage("images.jpg");
  getbgImage();
}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  drawSprites();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1200){
      bg = "snow1.jpg";
  }
  else if(hour>=1200 && hour<=1600){
      bg = "snow2.jpg";
  }
  else{
    bg="snow3.jpg"
  }

  
  



  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}


    