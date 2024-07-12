let star = document.getElementById("star");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountains3");
let mountain4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let h1 = document.querySelector("h1");

window.onscroll = function() {
    let value = scrollY;
    star.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountain3.style.top = value*2 +'px';
    mountain4.style.top = value*1.5 + "px"
    river.style.top= value + "px";
    boat.style.left = value*4 + "px";
    h1.style.fontSize = value + "px";
    if (scrollY >= 90) {
        h1.style.fontSize = 90 + "px";
        h1.style.position = "fixed";
        if (scrollY >= 458) {
            h1.style.display = "none"
        }else {
            h1.style.display = "block"
        }
        if (scrollY >= 112) {
            document.querySelector(".main").style.background = "linear-gradient(#376281, #10001f)"
        } else {
            document.querySelector(".main").style.background = "linear-gradient(#000, #333)"
        }
    } 
}



