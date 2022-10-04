let posY=250,paddir=0,prevpos=0,ballxdir=+1,ballydir=+1,ballxpos=35,ballypos=180;
let tem=setInterval(game,2);

// var k = 0;
function game(){
   
    // console.log(k);
    // k++;
  document.getElementById("pad2").style.top= posY-190 + "px";
//   document.getElementById("heading").innerHTML=-posY+640 +" " + ballypos ;
 
  document.getElementById("pad1").style.top= -posY+580 + "px";
  if(ballxdir==+1)
  ballxpos++;
  if(ballydir==+1)
  ballypos--;
  if(ballxdir==-1)
  ballxpos--;
  if(ballydir==-1)
  ballypos++;
    if(ballypos==0 || ballypos==450)
    ballydir*=-1;
    if((ballxpos==528 && ballypos<(posY-110) && ballypos>(posY-210)))
    ballxdir*=-1;
    if (ballxpos==35 && ballypos<(-posY+655)&& ballypos>(-posY+555))
    ballxdir*=-1;
    if(ballxpos>570 || ballxpos<2)
    {
        gameover();
    }
  document.getElementById("ball").style.left= ballxpos + "px";
  document.getElementById("ball").style.top= ballypos + "px";
}
function gameover(){
    clearInterval(tem);
    document.getElementById("heading").innerHTML="Game over" ;

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

  