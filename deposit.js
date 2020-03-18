function AlertError() {
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
        !Number.isInteger(termDays)) {
        console.log('срок вклада введен некорректно');
    }

}

function calculateDeposit(initial, monthly, percent, termDays) {
    if (initial <= 0 ||
        monthly < 0 ||
        percent <= 0 ||
        percent > 100 ||
        termDays <= 0 ||
        !Number.isInteger(termDays) ||
        isNaN(initial) ||
        isNaN(monthly) ||
        isNaN(percent) ||
        isNaN(termDays)) {
        AlertError();
        document.getElementById("error").className = 'errorVisible';
        return NaN;
    }

    let currentAmount = initial;
    let termMonths = termDays / 30;

    for (let i = 0; i < termMonths; i++) {
        currentAmount += monthly + currentAmount * percent * 0.01 / 12;
    }
    return Math.floor(currentAmount);
}

function getValues() {
    document.getElementById("error").className = 'errorHidden';
    initial = Number(document.getElementById("inputInitial").value);
    monthly = Number(document.getElementById("inputMonthly").value);
    percent = Number(document.getElementById("inputPercent").value);
    termDays = Number(document.getElementById("inputTerm").value);
    let Result = calculateDeposit(initial, monthly, percent, termDays);
    if (!isNaN(Result)) {
        alert(`Текущая сумма на вкладе ${Result}`);
    }
}

let initial;
let monthly;
let percent;
let termDays;

let buttonElement = document.getElementById("CountButton");

buttonElement.addEventListener("click", getValues);
