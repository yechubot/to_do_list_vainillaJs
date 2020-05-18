const sounds = document.querySelectorAll('.audio');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
// click colors and show as bubbles
const colors = [
    "#f6e58d",
    "#ffbe76",
    "#ff7979",
    "#badc58",
    "#dff9fb",
    "#686de0"
];

// add sounds
pads.forEach((pad, index) =>{
    pad.addEventListener('click', function(){
        sounds[index].currentTime = 0; // reset current time 
        sounds[index].play();
        createBubble(index);
        
    });
});

//create a function making bubbles 
const createBubble = (index) => {

    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.background = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function(){
        visual.removeChild(this);
    });
};