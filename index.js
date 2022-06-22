const operator = prompt("Enter either +, -, * or / ");

let fNum = Number(prompt("Enter the first number"));
let secNum = Number(prompt("Enter the second number"));

if (operator == '+'){
    result = fNum + secNum;
}
    else if (operator == '-') {
        result = fNum - secNum;
    }
        else if (operator == '*') {
            result = fNum * secNum;

        }
            else if (operator == '/') {
            result = fNum / secNum;
            }

            // alert(result)
            alert(`${fNum} ${operator} ${secNum} = ${result}`)
            

