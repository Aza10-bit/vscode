let USDinput = document.getElementsByName("USD")[0]
let UZSinput = document.getElementsByName("UZS")[0]

USDinput.addEventListener("input", USDtoUZS)

 function USDtoUZS(){
    let currency = 12700
    let result = +USDinput.value * currency
    UZSinput.value = result
}
