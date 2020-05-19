const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    //time display
    const timeDisplay = document.querySelector('.time-display');
    const outlineLength = outline.getTotalLength();

    //duration
    let fakeDuration = 600;
    const timeSelect = document.querySelectorAll('.time-select button');

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //pick different sound
    sounds.forEach(sound => {
       sound.addEventListener('click', function(){
        song.src = sound.getAttribute('data-sound');
        video.src = sound.getAttribute('data-video');
        checkPlaying(song);
       })
    })
/* checked attribute since I kept gettting error msg 'null'
           var see = sound.hasAttribute('data-sound');
           var see2 = sound.hasAttribute('data-video');
           console.log(see2);

           , and realized that I put attribute 'data-video' at wrong place on html.
*/

    //play sound
    play.addEventListener('click',()=> {
        checkPlaying(song);
    });

    //select time
    timeSelect.forEach(option => {
        option.addEventListener('click', function(){
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration %60)}`;
        })
    })

    //function to stop and play sounds and change icon
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = "./svg/pause.svg";
        }else{
            song.pause();
            video.pause();
            play.src = "./svg/play.svg";
        }
    }

    // animate circle 
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;
  
    //animate the text
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
    if(currentTime >= fakeDuration){
        song.pause();
        song.currentTime = 0;
        play.src = './svg/play.svg';
        video.pause();
    }
    }
    
}

app();