
{
    const calculateResult = (amount, currency) => {

        const rateEUR = 4.548;
        const rateCHF = 4.128;
        const rateUSD = 3.798;
        const rateGBP = 5.224;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

        }
    };


    const onSubmit = (event) => {
        event.preventDefault();



        const amountElement = document.querySelector(".js-form__input");
        const currencyElement = document.querySelector(".js-form__select");
        const paragraph = document.querySelector(".jsForm__paragraph--result");


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        paragraph.innerHTML = `${result.toFixed(2)} ${currency}`;


    }


    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onSubmit);



    };
    init();
}

