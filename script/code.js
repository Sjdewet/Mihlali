// let button = document.querySelector ('#Calculate');
// let result = document.getElementById('Output');
// button.addEventListener ('click', (sup)=> {

// })

// document.querySelector('#Clear').
// addEventListener('click', ()=>{
//     height.value = ""
//     weight.value = ""
//     result.innerText = ""
// })
// document.getElementById(Height)
// document.getElementById(weight)

function calculate() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let output = document.getElementById("output");



  let bmi;

  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  let statement = document.getElementById('statement')

  if (bmi < 18.5) {
    statement.textContent = "You are underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statement.textContent = "You are normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    statement.textContent = "You are overweight";
  } else {
    statement.textContent = "You are obese";
  }

  document.getElementById("output").textContent = bmi;

  console.log(bmi);
}

function clearinput() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("output").textContent = "Output";
    document.getElementById("statement").textContent = ""
}
