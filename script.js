$(".button").click(function() {
    /*
    if button pressed, do it:

    create random numbers
    see who wins
    tell the winner

    if button pressed, do it again
    */
    
    var dice1 = Math.floor((Math.random()) * 6) + 1;
    console.log(dice1);
    var dice2 = Math.floor((Math.random()) * 6) + 1;
    console.log(dice2);

    document.querySelector("#img1").setAttribute('src', 'images/dice' + dice1 + '.png');
    document.querySelector("#img2").setAttribute('src', 'images/dice' + dice2 + '.png');

    if (dice1 > dice2){
        document.querySelector("h1").innerHTML = "🎲 Player 1 Won. Congrats!";
    } else if (dice1 < dice2){
        document.querySelector("h1").innerHTML = "Player 2 Won. Congrats! 🎲";
    } else {
        document.querySelector("h1").innerHTML = "That's a Tie. Try again!";
    }
});