

const options = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

options.addEventListener('click',function() {

    //check if the button's class doesn't contain the slide class
   if(!options.classList.contains("slide")) {
       options.classList.add("slide");
       video.pause()
     //if the condition is true then pause the video
   }else {
       options.classList.remove("slide");
       video.play();
       //if the condition is false then play the video                  
   }
});

const preloader = document.querySelector('.preloader');
window.addEventListener('load',function() {
  preloader.classList.add("hide-preloader");
});