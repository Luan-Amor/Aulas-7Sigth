let numeros = [0, 0]
let operations
let index = 0
let limpa = true

function clearMemory(){
    index = 0
    limpa = true
    numeros = [0, 0]
    operations = null
    document.querySelector('.tela').innerHTML = '0'
}

function operation(elemnt){
    var tela = document.querySelector('.tela')
    if(index === 0){
        operations = elemnt.innerHTML
        limpa = true
        index = 1
    }else{
        const equals = operations === "="
        const currentOperation = operations
        try {
            numeros[0] = eval(`${numeros[0]}${currentOperation}${numeros[1]}`)
        } catch (error) {
            numeros[0] = numeros[0]
        }
        numeros[1] = 0

        tela.innerHTML = numeros[0]
        operations = equals ? null : operations
        index = equals ? 0 : 1
    }
}

function number(num){
    var tela = document.querySelector('.tela')

    if(num.innerHTML === "." && tela.innerHTML.includes(".") ){
        return
    }
    
    const clearDisplay = tela.innerHTML === "0" || limpa
    const currentValue = clearDisplay ? '' : tela.innerHTML
    const displayValue = currentValue + num.innerHTML

    tela.innerHTML = displayValue
    limpa = false

    if(num.innerHTML !== "."){
        const i  = index
        const value = parseFloat(displayValue)
        numeros[i] = value
    }

    console.log(numeros)
}