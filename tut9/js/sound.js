

let song = document.querySelector('#song');
let song2 = document.querySelector('#song2');
let song3 = document.querySelector('#song3');
let playBtn = document.querySelector('#play-button');
let pauseBtn = document.querySelector('#pause-button');
let playBtn2 = document.querySelector('#play-button2');
let pauseBtn2 = document.querySelector('#pause-button2');
let playBtn3 = document.querySelector('#play-button3');
let pauseBtn3 = document.querySelector('#pause-button3');

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

playBtn2.addEventListener('click', function() {
    song2.play();

})

pauseBtn2.addEventListener('click', function() {
    song2.pause();

})
playBtn3.addEventListener('click', function() {
    song3.play();

})

pauseBtn3.addEventListener('click', function() {
    song3.pause();

})

song.volume =.1;
song2.volume =.1;
song3.volume =.1;