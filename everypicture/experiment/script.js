(function(){
    "use strict";
    console.log('reading JS');

    const images = ['images/bfsdesk.jpg', 'images/cousinbrother.jpg', 'images/grandmagift.jpg', 'images/laughtogether.jpg', 'images/sister.jpg'];
    const texts = ["caption for pic1", 'caption for pic2', 'caption for pic3', 'caption for pic4', 'caption for pic5']
    const phos=document.querySelector('#phos');
    const caption=document.querySelector('#caption');
    let i = 0;
    let read;
    let paused = false;

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