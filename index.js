
//detecting Button Press
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for( var i=0;i<numberOfDrumButton;i++){

    // A function who listen when it clicked.
     // addEventlistener is listen when it clicked and call a function when it clicked 
    // in addEventlistener first one is type means what type of this(mouse click) and second one is listener(function)

    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
 // this is a identity that trigers a function 
 //innerHTML is a property of the HTML DOM that allows JavaScript code to manipulate the content of an HTML element   
var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML)

});

}

// Detecting Keyboard Press
// in this we add documents so entire page start listening keyboard 
// event tells which key is pressed 
// in this line we pass a function which trigger to keypress
document.addEventListener("keypress",function(event){
   // this event contain a propety key which tells us which key is pressed 
    makeSound(event.key);
    buttonAnimation(event,key);
});

// key tells which sounds to play 
function makeSound(key){

    switch (key){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
                
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
           crash.play();
            break;
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        
    
        default:
            console.log();
    }
}

function buttonAnimation(currentKey){
    var activeButton =  document.querySelector("."+ currentKey);
    //add to transparence
     activeButton.classList.add("pressed");
     //add timeout function to set time 

     setTimeout(function(){
        activeButton.classList.remove("pressed")
     },100);
}

