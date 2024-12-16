function displaymenu(){
    const info = document.querySelector(".offcanvas__info");
    info.classList.toggle("info-open");
    const overlay = document.querySelector(".offcanvas-overlay");
    overlay.classList.toggle("overlay-open");
}

function hidemenu(){
    const info = document.querySelector(".offcanvas__info");
    info.classList.toggle("info-open");
    const overlay = document.querySelector(".offcanvas-overlay");
    overlay.classList.toggle("overlay-open");
}

function showvideo(){
    var modalVideo = document.querySelector(".modal-video");
    var iframe = modalVideo.querySelector("iframe");

    iframe.src = "https://www.youtube.com/embed/vWLcyFtni6U?autoplay=1&amp;cc_load_policy=1&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;fs=1&amp;iv_load_policy=1&amp;loop=0&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;mute=0";
      
    modalVideo.classList.toggle("displaynone");

}

function hidevideo(){
    var modalVideo = document.querySelector(".modal-video");
    var iframe = modalVideo.querySelector("iframe");

    modalVideo.classList.toggle("displaynone");

    iframe.src = "";
}


window.onscroll = function() {
    toggleStickyHeader();
};

const header = document.getElementById("header-sticky");
const sticky = header.offsetTop; 

function toggleStickyHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky"); 
    } else {
        header.classList.remove("sticky"); 
    }
}

function incrementNumber(element,target) {
    let start = 0; 
    const end = target; 
    let incrementTime = 300/target; 
    incrementTime = (incrementTime<1)?(0):incrementTime;

    const interval = setInterval(() => {
        if (start < end) {
            start++;
            element.textContent = start; 
        } else {
            clearInterval(interval); 
        }
    }, incrementTime*20);
}


document.addEventListener('DOMContentLoaded', function() {
    const numberElements = document.querySelectorAll('.counter-count');

    numberElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        incrementNumber(element, target); 
    });

    // Sitecore Changes
    var modalVideo = document.querySelector(".modal-video");
    var iframe = modalVideo.querySelector("iframe");

    modalVideo.classList.add("displaynone");

    iframe.src = "";
    console.log('Sitecore Updated Changes');
});


