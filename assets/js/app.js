//header dropdown
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

// navin scroll etdikde gelmesi
let navSroll = document.querySelector(".nav-scroll")
navSroll.style.height = "0px"
navSroll.style.opacity = "0"
navSroll.style.overflow = "hidden"

window.onscroll = function () {
    scrollFunction()
    backFunction()
};
function scrollFunction() {   
    // scroll etdikde navin widthi artmasi
    // console.log(window.scrollY);
    // console.log(document.body.offsetHeight);
    // console.log(( window.scrollY / document.body.offsetHeight) *100);
    // navSroll.style.width =   +(( window.scrollY / document.body.offsetHeight) *100) + "%"

     if (window.scrollY < 200) {
        navSroll.style.height = "0px"
        navSroll.style.opacity = "0"
        navSroll.style.overflow = "hidden"

    }
    else {
        navSroll.style.height = "100px"
        navSroll.style.background = "#fff"
        navSroll.style.opacity = "1"
        navSroll.style.overflow = "visible"

    }
};

// // back scroll etdikde top sehifeye getmek ucun
const back = document.querySelector(".back")

let scrolling = window.pageYOffset;


function backFunction() {
    let currentScrollPos = window.pageYOffset;

    if (scrolling > currentScrollPos) {

        back.style.bottom = "40px";
        back.style.opacity = "1";
    } else {
        back.style.bottom = "0px";
        back.style.opacity = "0";
    }
    scrolling = currentScrollPos;
}

