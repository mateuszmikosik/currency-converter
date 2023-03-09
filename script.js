let baseValueElement = document.querySelector(".js-base-value");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-selected-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.69;
let USD = 4.39;
let GBP = 5.28;

formElement.addEventListener("input", () => {
    
    let baseValue = baseValueElement.value;
    let selectedCurrency = currencyElement.value;
    let result = resultElement.value;

    switch(selectedCurrency) {
        case "EUR":
            result = baseValue / EUR;
            break;
    
        case "USD":
            result = baseValue / USD ;
            break;
    
        case "GBP":
            result = baseValue / GBP;
            break;
    }

    if (baseValueElement.value>=0) {
    resultElement.innerText = result.toFixed(2);
    } else {
        resultElement.innerText = "Wartość nie może być ujemna!";
    }


})


