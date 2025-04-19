




document.getElementById("calc").addEventListener('click', function (e) {

let height = (document.getElementById('userHeight').value)/100
let weight = document.getElementById('userWeight').value
let BMI = (weight / (height * height)).toFixed(2)

if (isNaN(BMI)) alert("Please only enter numbers");

    else alert(`Your BMI is ${BMI}`);



}
)
