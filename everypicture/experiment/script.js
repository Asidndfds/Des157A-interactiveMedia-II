(function(){
    "use strict";
    console.log('reading JS');

    const images = ['images/bfsdesk.jpg', 'images/cousinbrother.jpg', 'images/grandmagift.jpg', 'images/laughtogether.jpg', 'images/sister.jpg'];
    const texts = ["Caption for pic1", "Caption for pic2", "Caption for pic3", "Caption for pic4","Caption for pic5"];
    const phos=document.querySelector('#phos');
    const caption=document.querySelector('#caption');
    let i = 0;
    let read;
    let paused = false;

    phos.src = images[i];
    caption.textContent = texts[i];

    function changeBox() {
        read = setTimeout(function(){
           i = (i+1)%images.length;
           phos.src = images[i];
           caption.textContent = texts[i];
           changeBox();
        }, 2500);
    }
    function pause(){
        paused =true;
        clearTimeout(read);
    }
    function resume(){
        if (!paused) return;
        paused = false;
        changeBox();
    }
    phos.addEventListener('mouseenter', pause);
    phos.addEventListener('mouseleave', resume);
    changeBox();
})();