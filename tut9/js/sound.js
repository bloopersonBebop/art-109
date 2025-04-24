

let song = document.querySelector('#song');
let playBtn = document.querySelector('#play-button');
let pauseBtn = document.querySelector('#pause-button');

playBtn.addEventListener('click', function() {
    song.play();

})

song.onloadeddata = function (){
    playBtn.style.visibility = 'visible';
}

console.log(song);

pauseBtn.addEventListener('click', function() {
    song.pause();

})

song.volume =.1;