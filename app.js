<<<<<<< HEAD
const nextButton =  document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4'];

let index = 0;
nextButton.addEventListener('click',function(){
    index += 1
    video.src = movieList[index];
    if(index === 3){
        index = -1;
    }
=======
const nextButton =  document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4'];

let index = 0;
nextButton.addEventListener('click',function(){
    index += 1
    video.src = movieList[index];
    if(index === 3){
        index = -1;
    }
>>>>>>> da4a4e1 (Added images and videos using Git LFS)
})
<<<<<<< HEAD
(Your local changes)
=======
(Changes from GitHub)
>>>>>>> main
