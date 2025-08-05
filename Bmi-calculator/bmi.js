const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();

   const height = document.querySelector('#height').value;
   const weight = document.querySelector('#weight').value;
   const result = document.querySelector('#results');

   if(height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
   } else if(weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
   } else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
        result.innerHTML = `You are under weight ${bmi}`;
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `You are in normal range ${bmi}`;
    } else {
        result.innerHTML = `You are overweight ${bmi}`;
    }
    // result.innerHTML = `<span>${bmi}</span>`
   }
})