const dice = require("../dice");

// http://roll.diceapi.com/json/d4

// http://roll.diceapi.com/json/d6

// http://roll.diceapi.com/json/d8

// http://roll.diceapi.com/json/d12

// http://roll.diceapi.com/json/d20

// $("button").click(function(){
//   $.ajax({url: "roll.diceapi.com/json/d6", success: function(result){
//     $("#div1").html(result);
//     console.log(result);
//   }});
// });

function rolldice(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d20 = Math.floor(Math.random() * 20) + 1 ;
  var d6 = Math.floor(Math.random() * 6) + 1 ;
  var diceTotal = d20 + d6;
  die1.innerHTML = d20;
  die2.innerHTML = d6;
  status.innerHTML = "You rolled " + diceTotal + "..";
  if(d20 == d6) {
    status.innerHTML += " DOUBLES !"
  }
}
dice.
rolldice();
