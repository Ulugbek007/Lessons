var heading = document.getElementById('heading');
heading.innerHTML = "Hello JavaScript";
heading.style.color = "red";

var bulb = document.getElementById("bulb");

function turnOnLight() {
    bulb.src = "assets/img/pic_bulbon.gif";
}

function turnOffLight() {
    bulb.src = "assets/img/pic_bulboff.gif";
}

window.alert("This is test alert!");