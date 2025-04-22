
const colors = ["red", "blue", "green", "pink", "orange", "cyan", "purple", "yellow", "white", "brown"]
let i=0;
let start = null
document.getElementById("start").addEventListener("click", function (e) 
{
    start = setInterval (function () {
        document.body.style.backgroundColor = colors [i];
        i++;
        if (i==colors.length) {i=0};
            
    }, 300)

}
)

document.getElementById("stop").addEventListener("click", function (e) {
    clearInterval(start)
})


