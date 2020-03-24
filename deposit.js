function alertError() {
    if (initial <= 0 ||
        isNaN(initial)) {
        console.log('начальная сумма введена некорректно');
    }
    if (monthly < 0 ||
        isNaN(monthly)) {
        console.log('сумма пополнения введена некорректно');
    }
    if (percent <= 0 ||
        percent > 100 ||
        isNaN(percent)) {
        console.log('процентная ставка введена некорректно');
    }
    if (termDays <= 0 ||
        !Number.isInteger(termDays) ||
        isNaN(termDays)) {
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
        alertError();
        document.getElementById("error").className = 'errorVisible';
        return NaN;
    }

    let currentAmount = initial;
    let termMonths = Math.floor(termDays / 30);

    for (let i = 0; i < termMonths; i++) {
        console.log(currentAmount);
        currentAmount += monthly + currentAmount * percent * 0.01 / 12;
    }
    return currentAmount;
}

function getValues() {
    document.getElementById("error").className = 'errorHidden';
    let initial = Number(document.getElementById("inputInitial").value);
    let monthly = Number(document.getElementById("inputMonthly").value);
    let percent = Number(document.getElementById("inputPercent").value);
    let termDays = Number(document.getElementById("inputTerm").value);
    let result = calculateDeposit(initial, monthly, percent, termDays).toFixed(2);
    if (!isNaN(result)) {
        alert(`Текущая сумма на вкладе ${result}`);
    }
}

let buttonElement = document.getElementById("CountButton");

buttonElement.addEventListener("click", getValues);
