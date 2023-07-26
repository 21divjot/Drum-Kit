var drumNo = document.querySelectorAll("button").length;
var drumList = document.querySelectorAll("button");
for (var i = 0; i < drumNo; i++){
    drumList[i].addEventListener("click", feature);
    
}

function feature() {  //active for buttons only
    var buttonName = this.innerHTML;
    makeSound(buttonName);
    buttonAnimation(buttonName);
}

document.addEventListener("keypress", function(event){  //event listener for entire page for keystrokes
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

