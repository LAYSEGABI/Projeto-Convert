const USD = 4.87;
const EUR = 5.32;
const GBP = 6.54;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        footer.classList.add("show-result")

        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
        let total = amount * price;

        total = formatCurrencyBRL(total)
        result.innerHTML = `${total} Reais`;

    } catch (error) {
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possivél converter")
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })
}