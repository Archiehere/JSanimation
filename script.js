let posY=250,paddir=0,prevpos=0,ballxdir=+1,ballydir=+1,ballxpos=100,ballypos=180,score=0,speed=10 ;
let tem,run=1,pause=0;
let speen,ballhit1,ballhit2,gameded;
ballhit1 = new Audio ("sounds/snd4.mp3");
ballhit2 = new Audio ("sounds/snd5.mp3");
gameded = new Audio ("sounds/snd6.mp3")
function speedchange(){
speed =parseInt(document.getElementById("sped").value, 10) ;
}
function startgame(){
  tem = setInterval(game,15);
}
// var k = 0;
pauser(" ");
// startgame();

function game(){
   
    // console.log(k);
    // k++;
  document.getElementById("pad2").style.top= posY-190 + "px";
  document.getElementById("heading").innerHTML="SCORE:-" + score;
 
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
      ballhit1.play();
      if(paddir==1)
      {ballydir=1;}
      else
      {ballydir=-1;}
      ballxdir*=-1;
    }
    
    if (ballxpos<=35 && ballypos<(-posY+660)&& ballypos>(-posY+550))
    {
      score++;
      ballhit2.play();
      if(paddir==1)
      {ballydir=-1;}
      else
      {ballydir=1;}
      ballxdir*=-1;
    }
     
    if(ballxpos>550 || ballxpos<10)
    {
        gameover();
        gameded.play();
        
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
    document.getElementById("foot").innerHTML="Retry :- SPACEBAR";
    document.getElementById("playarea").style.cursor = "pointer" ;
    document.getElementById("spedbox").style.visibility= "hidden" ;

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
 
 function pauser(input){
 
  if(input===' '&&run==1){
      if(pause==0){
          clearInterval(tem);
          pause=1;
          pausebtn.style.display = "block";
          document.getElementById("playarea").style.cursor = "pointer" ;
          
      }
      else{
          pause=0;
          pausebtn.style.display = "none";
          document.getElementById("playarea").style.cursor = "none" ;
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

  