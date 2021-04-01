
/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
In JavaScript : To iniialize audio file use = new Audio
let test = new Audio("./assets/Piano Chord 331.mp3");
test.play(); 
*/
class Beat{
     constructor(audioSrc){
            this.audio = new Audio(audioSrc);
           // console.log(this.audio);
     }
     play = () =>{
         //if we double press keyboard double single time  its going to reset the audio and replay it again.
         this.audio.currentTime = 0;
         this.audio.play()
     }
}


/**
 * Button class that keeps track of the button based on a press 
 */
class Button{
    constructor(color, keyCode){
            this.color = color;
            this.keyCode = keyCode;
            this.element = document.getElementById(keyCode);
           // console.log(this.element);
           this.setButtonColorInHTML();
           this.setATransitionEndListener();
    }

    /*
     * solution 1: remove style on keyup
     * solution 2: wait a certain amount of time to remove style
     * solution 3: There is an event called when transition end.: React on transitionend event
     */
    setATransitionEndListener = () =>{
        this.element.addEventListener('transitionend', () =>{
            console.log("transition ended");
            this.deselect();
        })
    }
    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor= this.color; 
    }

    /**
     * Select function to set the background color and boxShadow
     * HINT: a boxshadow looks like this 0px 0px 17px 0px #FFFFFF
     */
    select = () => {
            this.element.style.backgroundColor = this.color;
            this.element.style.boxShadow = `0px, 0px, 17px, 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     * when to call:
     */
    deselect = () => {
        this.element.style.backgroundColor="transparent";
        this.element.style.boxShadow= "none";
    }
}