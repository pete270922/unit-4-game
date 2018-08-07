//Establish a "winningNumber" (set to 50 in this game)
var winningNumber = 57;

$("#number-to-guess").text(winningNumber);
// Score 
var counter = 0;
$("#counterActive").text(counter)
//Scoring array is expanded to four options.
var numberOptions = [10,11,4,5];

for (var i=0; i<numberOptions.length; i++){
     
    //Creates an image for each array option
    var imageCrystal= $("<img>");

       //Each imageCrystal will given a class for CSS
        imageCrystal.addClass("crystal-image");

        //Assigns a image to the crystals
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")

        imageCrystal.attr("data-score", numberOptions[i]);

        $("#crystals").append(imageCrystal);
     }
$(".crystal-image").on("click", function(){
    
// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the score value of the clicked crystal.
// Using the .attr("data-score") allows us to grab the value out of the "data-score" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        var score = ($(this).attr("data-score"));
        score = parseInt(score);
        counter += score;

        alert("New Score:" + counter);
        
        //Player wins when counter is equal to winningNumber.
        if (counter === winningNumber){
            alert("You win!");
        }
        else if (counter >= winningNumber){
            alert("You did not win! You Lost!")
        }
    })