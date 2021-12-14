window.addEventListener("load", (event) => {
    event.preventDefault();
    mySlider();
    generateSelectTagValue();
});

const para = document.createElement("P");
para.classList.add('container-default');


function compute(event)
{
    event.preventDefault();
    p = parseFloat(document.getElementById("principal").value, 10);
    r = parseFloat(document.getElementById("rate").value, 10);
    y = parseInt(document.getElementById("years").value, 10);

    const rate = r / 100;
    const result = (p * rate) * y

    const validateFields = verifyEmptyFields(p, r, y);
    const container = document.getElementById("container");

    if (validateFields) {
        para.innerHTML = setResult(p, r, result, y);
    } else {
        para.innerHTML = '<span class="error container-default">Please fill all required fields</span>'
    }
    container.appendChild(para);
}
function setResult(principal, rate, result, year) {
    return `If you deposit <span class="highlight">${principal}</span><br/>
    at an interest rate of <span class="highlight">${rate}%</span><br/>
    You will receive an amount of <span class="highlight">${result},</span><br/>
    in the year <span class="highlight">${getFutureYear(year)}</span>`;
}

function getFutureYear (year) {
    var date = new Date();
    const futureYear = date.getFullYear() + year
    date.setFullYear(futureYear)
    return date.getFullYear();
}

function verifyEmptyFields(p, r, y) {
    if (isNaN(p) || isNaN(r) || isNaN(y)) {
        return false;
    }
    return true;
}

function mySlider() {
    const slider = document.getElementById("rate");
    let output = document.getElementById("outputValue");
    output.innerHTML = `${slider.value}%`;
    slider.oninput = function() {
        output.innerHTML = `${this.value}%`;
    }
}

function generateSelectTagValue() {
    const selectTag = document.getElementById("years");
    for (let index = 0; index < 50; index++) {
        let option = document.createElement( 'option' );
        option.value = index + 1;
        option.innerText = option.value;
        selectTag.appendChild(option);
        
    }
}
