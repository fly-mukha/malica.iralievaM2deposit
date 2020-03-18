function calculateDeposit(initial, monthly, percent, termDays) {
    if (initial <= 0) {
        console.log('начальная сумма введена некорректно');
    }
    if (monthly < 0) {
        console.log('сумма пополнения введена некорректно');
    }
    if (percent <= 0 ||
        percent > 100) {
        console.log('процентная ставка введена некорректно');
    }
    if (termDays <= 0 ||
        !Number.isInteger(term)) {
        console.log(termDays <= 0);
        console.log(!Number.isInteger(term)); 
        console.log('срок вклада введен некорректно');
    }

    let currentAmount = initial;
    let termMonths = termDays / 30;

    for (let i = 0; i < termMonths; i++) {
        currentAmount += monthly + currentAmount * percent * 0.01 / 12;
    }
    return Math.floor(currentAmount);
}

function getValues() {
    initial = Number(document.getElementById("inputInitial").value);
    monthly = Number(document.getElementById("inputMonthly").value);
    percent = Number(document.getElementById("inputPercent").value);
    termDays = Number(document.getElementById("inputTerm").value);
    alert(calculateDeposit(initial, monthly, percent, termDays));
}

let initial;
let monthly;
let percent;
let termDays;

let buttonElement = document.getElementById("CountButton");

buttonElement.addEventListener("click", getValues);
