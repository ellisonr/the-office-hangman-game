var phraseKey = ["conference room","pretzel day","i declare bankruptcy","bears eat beets","battlestar galactica","did i stutter","diversity day","sabre",
    "the dundies","save bandit","keep it simple stupid","it is your birthday","party planning committee","finer things club","flonkerton","threat level midnight","goodbye toby",
    "lanch party","ryan started the fire","oaky afterbirth","scott's tots","rundown","dinkin flicka","princess unicorn","vance refrigeration","dinner party"
];

function randomPhrase(){
    var a = Math.floor((Math.random()*phraseKey.length)); //from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    phraseInPlay = phraseKey[a];
    return phraseInPlay;
}
randomPhrase()
const separatedPhrase = phraseInPlay.split("");

//for loop that creates a space in the "playing area" for each letter in the separatedPhrase
for (var i=0; i<separatedPhrase.length; i++){
    let placeholderForLetter = document.createElement("div");
    placeholderForLetter.className = "spaceForLetter";
    document.querySelector(".blank-tiles").appendChild(placeholderForLetter);
    //function that displays the letters in the playing area, but make them hidden at first
    displayedLetter = document.createElement("div");
    displayedLetter.className = "displayedLetter";
    displayedLetter.innerHTML = separatedPhrase[i];
    displayedLetter.style.visibility = "hidden";
    placeholderForLetter.appendChild(displayedLetter);
}
//^creates a div element within each placeholder div from above, then innerHTML sticks the individual letters into each div; append the value of the div into the given placeholder div

const keyButtons = document.querySelectorAll(".letter")
for(let j=0; j<keyButtons.length; j++){
    keyButtons[j].addEventListener("click",function(e){
        e.preventDefault();
        // if(displayedLetter.innerHTML === " "){
        //     spaceForLetter.style.visibility = "hidden";
        // }
        if(separatedPhrase.includes(e.target.innerHTML)){
            e.target.style.opacity = 0.4;
            e.target.style.border = "3px solid green";
            if(e.target.innerHTML.includes(displayedLetter.innerHTML)){
                displayedLetter.style.visibility = "visible";
            }
        }
        // console.log("you clicked!"+" "+`${keyButtons[j].innerHTML}`) <--testing to see if i'm targeting the buttons correctly
        else{
            e.target.style.opacity = 0.4
            e.target.style.border = "3px solid red";
        }
    })
}

//OTHER ISSUES THAT NEED SETTLING
//on clicking a letter, if it matches, turn off that letter's "display: none"
//i just noticed that i can get the same two random phrases in a row... find a way to disable that