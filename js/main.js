// selecting numeric buttons
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");


// selecting operations buttons
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");
let point = document.getElementById("point");


// selecting buttons and inputs
let equal = document.getElementById("equal");
let ac = document.getElementById("ac");

let opsdisplay = document.getElementById("ops");

// selecting result container
let resultcont = document.getElementById("rescont");
let first = document.getElementById("first");
let second = document.getElementById("second");
let opsd = document.getElementById("opsd"); 
let res = document.getElementById("res");


let fisrtval;
let secondval;
let selectedops;
let opsresult;

// Event listeners for numeric buttons
function handleNumericClick(value) {
    opsdisplay.value += value; // Append the clicked value to the display
}

// giving numeric buttons values
one.addEventListener("click", () => {
    handleNumericClick(1);
})

two.addEventListener("click", () => {
    handleNumericClick(2);
})

three.addEventListener("click", () => {
    handleNumericClick(3);
})

four.addEventListener("click", () => {
    handleNumericClick(4);
})

five.addEventListener("click", () => {
    handleNumericClick(5);
})

six.addEventListener("click", () => {
    handleNumericClick(6);
})

seven.addEventListener("click", () => {
    handleNumericClick(7);
})

eight.addEventListener("click", () => {
    handleNumericClick(8);
})

nine.addEventListener("click", () => {
    handleNumericClick(9);
})

zero.addEventListener("click", () => {
    handleNumericClick(0);
})

// Clear button event
ac.addEventListener("click", () => {
    opsdisplay.value = ""; // Clear the display
    first.innerHTML =``;
    second.innerHTML =``;
    opsd.innerHTML = ``;
    res.innerHTML = ``;
    resultcont.style.display = "none";
    
});



// giving operations to operations button
plus.addEventListener("click", () => {
    plus.value = "+";
    fisrtval = parseInt(opsdisplay.value);
    selectedops = "+"
    opsdisplay.value = ""; // Clear the display
    // console.log(`fisrt value ${fisrtval}`)
})

minus.addEventListener("click", () => {
    minus.value = "-";
    fisrtval = parseInt(opsdisplay.value);
    selectedops = "-"
    opsdisplay.value = ""; // Clear the display
    // console.log(`fisrt value ${fisrtval}`)
})

multiply.addEventListener("click", () => {
    multiply.value = "*";
    fisrtval = parseInt(opsdisplay.value);
    selectedops = "*"
    opsdisplay.value = ""; // Clear the display
    // console.log(`fisrt value ${fisrtval}`)
})

division.addEventListener("click", () => {
    division.value = "/";
    fisrtval = parseInt(opsdisplay.value);
    selectedops = "/"
    opsdisplay.value = ""; // Clear the display
    // console.log(`fisrt value ${fisrtval}`)
})

equal.addEventListener("click", () => {
    if(fisrtval != "") {
        secondval = parseInt(opsdisplay.value);
       
        opsdisplay.value = "";
        }

        if(selectedops === "+") {
            opsresult = fisrtval + secondval;
            console.log(`your addition result is =${opsresult}`)
        }
        

       else if(selectedops === "-") {
            opsresult = fisrtval - secondval;
            console.log(`your subtraction result is =${opsresult}`)
        }

        else if(selectedops === "*") {
            opsresult = fisrtval * secondval;
            console.log(`your multiplication result is =${opsresult}`)
        }
        else if(selectedops === "/") {
            opsresult = fisrtval / secondval;
            console.log(`your division result is =${opsresult}`)
        }

        resultcont.style.display = "block";
        first.innerHTML =`    ${fisrtval}`;
        second.innerHTML =`   ${secondval}`;

        if(selectedops === '+') {
            opsd.innerHTML = `addition ${selectedops}`;
        }
        else if(selectedops === '-') {
            opsd.innerHTML = `subtraction   ${selectedops}`;
        }
        else if(selectedops === '*') {
            opsd.innerHTML = `multiplication   ${selectedops}`;
        }
        else if(selectedops === '/') {
            opsd.innerHTML = `division   ${selectedops}`;
        }
          res.innerHTML = `   ${opsresult}`;



})




