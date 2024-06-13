// BUCLE WHILE HASTA QUE EL CONTADOR SEA MENOR O IGUAL A 100
let contador = 15
while (contador < 101) {
    console.log('valor del contador menos o igual: ', contador)
    contador = contador +1
}
// BUCLE WHILE HASTA QUE EL CONTADOR 2 SEA IGUAL A 0
let contador2 = 50
while(contador2 > -1){
    console.log('valor del contador restando hasta: ', contador2)
    contador2 = contador2 -1
}

// BUCLE FOR INCREMENTANDO LA VARIABLE HASTA QUE LA VARIABLE DE CONTROL SEA IGUAL A 15
for(variableControl = 0; variableControl <= 15; variableControl ++) {
    console.log('valor de control: ',variableControl)
}

// BUCLE FOR DISMINUYENDO VALOR HASTA QUE SEA VALOR IGUAL A 0
for(variableControl = 10; variableControl >= 0; variableControl --) {
    console.log('valor de control 2: ',variableControl)
}
// BUCLE FOR HASTA 8, EN EL QUE, EN LOS PASOS PARES (2,4,6,8) MULTIPLIQUE LA VARIABLE POR 2
let variableAMultiplicar = 5
for(variableControl = 0; variableControl <= 8; variableControl ++){
    if(variableControl === 2){
        variableAMultiplicar = variableAMultiplicar * 2
        console.log('muestra el valor: ',variableAMultiplicar)
    }
    if(variableControl === 4){
        variableAMultiplicar = variableAMultiplicar * 2
        console.log('muestra el valor: ',variableAMultiplicar)
    }
    if(variableControl === 6){
        variableAMultiplicar = variableAMultiplicar * 2
        console.log('muestra el valor: ',variableAMultiplicar)
    }
    if(variableControl === 8){
        variableAMultiplicar = variableAMultiplicar * 2
        console.log('muestra el valor: ',variableAMultiplicar)
    }
    
}