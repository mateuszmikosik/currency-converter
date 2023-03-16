{
const calculateResult = (baseValue, selectedCurrency) => {
    const EUR = 4.69;
    const USD = 4.39;
    const GBP = 5.28;

    switch(selectedCurrency) {
        case "EUR":
            return baseValue / EUR;
    
        case "USD":
            return baseValue / USD;
    
        case "GBP":
            return baseValue / GBP;
}}

const onFormInput = () => {
    const baseValueElement = document.querySelector(".js-base-value");
    const currencyElement = document.querySelector(".js-selected-currency");
    const resultElement = document.querySelector(".js-result");    
    const baseValue = baseValueElement.value;
    const selectedCurrency = currencyElement.value;
    let result = calculateResult(baseValue,selectedCurrency);
    
        if (baseValueElement.value>=0) {
        resultElement.innerText = result.toFixed(2);
        } else {
            resultElement.innerText = "Wartość nie może być ujemna!";
        }
    };

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("input", onFormInput);
};
init();
}
        
        


