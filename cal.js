function addToDisplay(char) {
    document.getElementById("display").value += char;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}


function calculate() {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }