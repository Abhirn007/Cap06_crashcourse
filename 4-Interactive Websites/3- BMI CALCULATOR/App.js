<script>
function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid weight and height values.');
    return;
  }

  var bmi = weight / (height * height);

  var resultText;
  if (bmi <= 18.4) {
    resultText = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText = 'Normal Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultText = 'Overweight';
  } else {
    resultText = 'Obese';
  }

  document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2) + '. You are ' + resultText + '.';
}
</script>