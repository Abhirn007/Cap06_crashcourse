{/* <script>
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    alert("Result: " + (num1 + num2));
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    alert("Result: " + (num1 - num2));
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        alert("Error: Cannot divide by zero");
    } else {
        alert("Result: " + (num1 / num2));
    }
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    alert("Result: " + (num1 * num2));
}
</script> */}
<script>
     function add () {
        let num1 =  parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2"));
        alert("Result:"+(num1 + num2));
     }
     function subtract(){
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = pareseFloat(document.getElementById("num2").value);
        alert("Result:"+ (num1- num2));
        }
        function divide (){
            let num1 = parseFloat(document.getElementById("num1").value)
            let num2 = parsefloat(document.getElementById("num2").value)
            if (num2 ==== 0){
                alert("Error: Can not divide by zero");
            }else {
                alert("Result:"+(num1/num2));
            }
        }
        function multiply (){
            let num1 = parseFloat(document.getElementById("num1").value)
            let num2 = parseFloat(document.getElementById("num2").value)
            alert("Result:"+(num1 * num2));
        }
     }
</script>
