let timefield = document.getElementById("time");


setInterval(function(){
    timefield.textContent = new Date().toLocaleTimeString();
}, 1000)