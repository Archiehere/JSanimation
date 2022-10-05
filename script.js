let posY=250,paddir=0,prevpos=0,ballxdir=+1,ballydir=+1,ballxpos=100,ballypos=180,score=0,speed=9;
let tem,run=1,pause=0;

startgame();
function startgame(){
  tem = setInterval(game,15);
}
// var k = 0;
function game(){
   
    // console.log(k);
    // k++;
  document.getElementById("pad2").style.top= posY-190 + "px";
  document.getElementById("heading").innerHTML=score;
 
  document.getElementById("pad1").style.top= -posY+580 + "px";
  if(ballxdir==+1)
  ballxpos+=speed;
  if(ballydir==+1)
  ballypos-=speed;
  if(ballxdir==-1)
  ballxpos-=speed;
  if(ballydir==-1)
  ballypos+=speed;
    if(ballypos<=0 || ballypos>=450)
    ballydir*=-1;
    if((ballxpos>=528 && ballypos<(posY-100) && ballypos>(posY-220)))
    {
      score++;
      if(paddir==1)
      {ballydir=1;}
      else
      {ballydir=-1;}
      ballxdir*=-1;
    }
    
    if (ballxpos<=35 && ballypos<(-posY+660)&& ballypos>(-posY+550))
    {
      score++;
      if(paddir==1)
      {ballydir=-1;}
      else
      {ballydir=1;}
      ballxdir*=-1;
    }
     
    if(ballxpos>550 || ballxpos<10)
    {
        gameover();
        
    }
  document.getElementById("ball").style.left= ballxpos + "px";
  document.getElementById("ball").style.top= ballypos + "px";
}
function gameover(){
    clearInterval(tem);
    document.getElementById("heading").innerHTML="Game over :" +  score;
    run=0;
    const retry = document.getElementById("retry");
    retry.style.display = "block";
    document.getElementById("foot").innerHTML="Retry :- spacebar";
    document.getElementById("playarea").style.cursor = "pointer" ;
    retry.addEventListener("click",function(){
        location.reload();
    });
    
}
function getCursorPosition(event) {
    prevpos=posY;
    posY = event.clientY;
    if(posY<190)
    posY=190;
    if(posY>580)
    posY=580;

    if(posY>prevpos)
    paddir=-1;
    else if(posY<prevpos)
    paddir=+1;
    
 }
 function askspeed(){
  speed = prompt("Please Enter speed (5-10)",5);
  if(speed<=10 && speed>=5)
  {}
  else
  {speed=5;}
 }
 function pauser(input){
 
  if(input===' '&&run==1){
      if(pause==0){
          clearInterval(tem);
          pause=1;
          pausebtn.style.display = "block";
      }
      else{
          pause=0;
          pausebtn.style.display = "none";
          startgame();
      }
  }
  if(input===' '&&run==0)
  {
    location.reload();
  }
}
 window.addEventListener('keydown',function(event){
  pauser(event.key);
});

  