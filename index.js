
 var arr =["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png"];
 var rand = Math.floor(Math.random()*arr.length);

 var final = arr[rand];

 document.querySelector(".img1").setAttribute("src" ,final);

 var arr2 =["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png"];
 var rand2 = Math.floor(Math.random()*arr.length);

 var final2 = arr2[rand2];

 document.querySelector(".img2").setAttribute("src" ,final2);

     if (final > final2) {
      document.querySelector("h1").innerHTML = "Play 1 Wins!";
    }
    else if (final2 > final) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! ";
    }
    else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

