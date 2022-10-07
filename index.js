console.log("Script Loaded");

var btn = document.querySelectorAll(".drum");

// console.log(btn[4].className[0]);

for(var i=0; i<btn.length; i++)//This for-loop is adding this EventListener fn. to every button and when clicked the function() is triggered
{   
    btn[i].addEventListener("click", function(){
        // alert(event.target.className[0] + " was clicked.");
        // alert(btn[i].className[0] + " was clicked.");//?This is working with 'let' not with 'var'.
        // alert(this.innerHTML);

        var btnClicked = this.innerHTML;

        makeSound(btnClicked);

        buttonAnimation(btnClicked);
    });
}

document.addEventListener("keydown", function(event){//'keydown'-> detects keyboard strokes
    makeSound(event.key);//'.key' is keyboard function that gives the key which was pressed.
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case 'w':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio("sounds/tom-4.mp3").play();
            break;
    
        default:
            console.log(btnClicked);
            break;
    }
}

function buttonAnimation(key) {
    
    var activeButton = document.querySelector("."+ key);
    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);
    console.log(activeButton);

}