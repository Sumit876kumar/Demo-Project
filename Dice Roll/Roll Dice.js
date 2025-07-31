let dicebtn = document.getElementById("btn");

let Result = document.getElementById("result");

let diceface = ['⚀☝🏻 ', '⚁✌🏻', '⚂👌🏻', '⚃👊🏻', '⚄🤚🏻', '⚅👍🏻'];

dicebtn.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = document.getElementById("diceImage");

    diceImage.textContent = diceface[randomNumber - 1];

      diceImage.style.transform = 'rotate(360deg)';
  setTimeout(function() {
    diceImage.style.transform = 'rotate(0deg)';
},300);

Result.textContent = "Result Number : " + randomNumber;

setTimeout(function(){
    Result.textContent = "";
    diceImage.textContent = "🎲";
},1500);
});


