const light = document.querySelector(".light");
const grid = document.querySelector(".hex-grid");
const container = document.querySelector('.container');

container.addEventListener("mousemove", moveLight);
function moveLight(e) {
    const scrollY = document.documentElement.scrollTop;

    // light.style.left = e.clientX + 'px';
    // light.style.top = `${e.clientY + scrollY}px`
    
    function setLocation() {
        light.style.left = e.clientX + 'px';
        light.style.top = `${e.clientY + scrollY}px`
    }

    setTimeout(setLocation, 0);

    // console.log(e);
}