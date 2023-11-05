const currency = document.querySelector(".currency")
const lang = document.querySelector(".lang")
const subCurrency = document.querySelector(".subCurrency")
const subLang = document.querySelector(".subLang")


currency.addEventListener("click", (e) => {
    e.stopPropagation()

    if (subLang.classList.contains("active")) {
        subLang.classList.remove("active")
    }
    subCurrency.classList.toggle("active")
})
lang.addEventListener("click", (e) => {
    e.stopPropagation()

    if (subCurrency.classList.contains("active")) {
        subCurrency.classList.remove("active")
    }
    subLang.classList.toggle("active")
})

window.addEventListener("click", () => {
    if (subCurrency.classList.contains("active")) {
        subCurrency.classList.remove("active")
    }
    if (subLang.classList.contains("active")) {
        subLang.classList.remove("active")
    }
})