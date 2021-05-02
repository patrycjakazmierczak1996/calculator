let form = document.querySelector(".js-form");
let formInput = document.querySelector(".js-form__input");
let formSelect = document.querySelector(".js-form__select");
let paragraph = document.querySelector(".jsForm__paragraph--result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let euroRate = 4.548;
    let frankRate = 4.128;
    let usdRate = 3.798;
    let poundRate = 5.224;

    let rates = +formInput.value;
    let currency = formSelect.value;


    let resultAmount;
    let resultSentence = "Po przeliczeniu";

    switch (currency) {
        case "EUR":
            resultAmount = (rates / euroRate);
            currencyName = "EUR";
            break;
        case "CHF":
            resultAmount = (rates / frankRate);
            currencyName = "CHF";
            break;
        case "USD":
            resultAmount = (rates / usdRate);
            currencyName = "USD";
            break;
        case "GBP":
            resultAmount = (rates / poundRate);
            currencyName = "GBP";
            break;
        default:
            paragraph.innerText = "Brak kursu waluty.";
    };
    paragraph.innerText = `${resultSentence} ${resultAmount.toFixed(2)} ${currencyName}`;
   
    form.addEventListener("reset", () => {
        paragraph.innerText = "";


    });
});
