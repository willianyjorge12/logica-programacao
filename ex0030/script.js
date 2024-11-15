var numero1 = document.querySelector("#numero1".value)
var numero2 = document.querySelector("#numero2".value)
var btnSomar = document.querySelector ("#somar")
var btnDividir = document.querySelector("#dividir")
var btnMultiplicar = document.querySelector("#multiplicar")
var btnSubtrair = document.querySelector("#subtrair")

btnSomar.addEventListener("click",somar)



btnDividir.addEventListener("click",dividir)



btnMultiplicar.addEventListener("click",multiplicar)



btnSubtrair.addEventListener("click",subtrair)


function somar(){

    var somar = numero1+numero2

    res.innerText = somar
    


}


function dividir(){
    var numero1Convertido =Number(numero1.value)
    var numero2Convertido =Number(numero2.value)
    var dividir = numero1Convertido/numero2Convertido

    res.innerText = dividir
}


function multiplicar(){
    var numero1Convertido =Number(numero1.value)
    var numero2Convertido =Number(numero2.value)
    var multiplicar = numero1Convertido*numero2Convertido

    res.innerText = multiplicar

}


function subtrair(){
    var numero1Convertido =Number(numero1.value)
    var numero2Convertido =Number(numero2.value)
    var subtrair = numero1Convertido-numero2Convertido

    res.innerText = subtrair

}