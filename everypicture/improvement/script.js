(function(){
    "use strict";
    console.log('reading JS');

    const images = ['images/bfsdesk.jpg', 'images/cousinbrother.jpg', 'images/grandmagift.jpg', 'images/laughtogether.jpg', 'images/sister.jpg'];
    const texts = ["Love letter displaying on the wall of boyfriend's bedroom", "Smile of cousin when he is looking back at my phone camera", "Happy face of grandma when receiving my handmade gift", "Funny reflection on a mirror of families in a restaurant","Making dumplings with grandma and cousin"];

    const phos=document.querySelector('#phos');
    const caption=document.querySelector('#caption');
    const photos = document.querySelector('#photos');

    const thumbs = document.querySelectorAll('#display img');
    
    let i = 0;
    let read;
    let paused = false;

    document.addEventListener('click', function(){ //when a click is heard, run this function
        photos.classList.toggle('zoomed'); // make the #photos zoomed in or out
    });
    function showImage(){
     phos.src =images[i]; // make the photo to image[i]
      thumbs.forEach(function(thumb, index){
        thumb.classList.toggle('active', index === i);
      });                         //make the active image chosen
     caption.textContent = texts[i]; // make the caption to texts[i]
    }
   
   function nextImage(){
     i=(i+1)%images.length; // make the next image i+1 and return to the first one and repeat
        showImage();
   }
    function changeBox(delay=2500) { //the time delay between changing images is 2.5s
        clearTimeout(read);
        read = setTimeout(function(){
           nextImage();
           changeBox();
        }, delay);
    }
    function pause(){ // when the image changing is paused, cancel the timer
        paused =true;
        clearTimeout(read);
    }
    function resume(){ // when the image changing is unpaused, the next image will be played with a shorter delay 
        if (!paused) return; // nothing happens if the photo isn't paused
        paused = false;
        changeBox(670);
    }
    showImage();
    phos.addEventListener('mouseenter', pause); //when the mouse enters the changing photo area, it pauses
    phos.addEventListener('mouseleave', resume); //when the mouse left the changing photo area, it resumes
    changeBox();
})();