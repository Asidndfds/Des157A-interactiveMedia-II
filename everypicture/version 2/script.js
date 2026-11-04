(function(){
    "use strict";
    console.log('reading JS');

    const images = ['images/bfsdesk.jpg', 'images/cousinbrother.jpg', 'images/grandmagift.jpg', 'images/laughtogether.jpg', 'images/sister.jpg'];
    const texts = ["Love letter displaying on the wall of boyfriend's bedroom", "Smile of cousin when he is looking back at my phone camera", "Happy face of grandma when receiving my handmade gift", "Funny reflection on a mirror of families in a restaurant","Making dumplings with grandma and cousin"];

    const phos=document.querySelector('#phos');
    const caption=document.querySelector('#caption');
    let i = 0;
    let read;
    let paused = false;

    function showImage(){
     phos.src =images[i]; 
     caption.textContent = texts[i];
    }
   
   function nextImage(){
     i=(i+1)%images.length;
        showImage();
   }
    function changeBox(delay=2500) {
        clearTimeout(read);
        read = setTimeout(function(){
           nextImage();
           changeBox();
        }, delay);
    }
    function pause(){
        paused =true;
        clearTimeout(read);
    }
    function resume(){
        if (!paused) return;
        paused = false;
        // nextImage();
        changeBox(670);
    }
    showImage();
    phos.addEventListener('mouseenter', pause);
    phos.addEventListener('mouseleave', resume);
    changeBox();
})();