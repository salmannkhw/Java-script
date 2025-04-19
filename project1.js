let body = document.querySelector("body")
const buttons = document.querySelectorAll(".theButtons")


buttons.forEach(function (btn)
{
btn.addEventListener('click', function (e) {
    switch (e.target.id) {
        case 'red':
            body.style.backgroundColor = 'red'
            body.style.color = 'blue'
            break;
        case 'blue':
            body.style.backgroundColor = 'blue'
            body.style.color = 'white'
            break;
        case 'green':
            body.style.backgroundColor = 'green'
            body.style.color = 'yellow'
            break;
        case 'white':
            body.style.backgroundColor = 'white'
            body.style.color = 'black'
            break;
    
        default:
            break;
    }
    
})
}


)