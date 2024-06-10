
const edad = 28
console.log("muestra la edad")

// HAZ UNA COMPROBACIÓN, QUE PINTE POR CONSOLA CUANDO EDAD SEA 28

if (edad === 28) {
    console.log("esta es la edad correcta")
}

// HAZ UNA COMPROBACIÓN, QUE PINTE POR CONSOLA, CUANDO EDAD SEA DIFERENTE A 30
if (edad !== 30){
    console.log("no es 30")
}

// HAZ UNA COMPROBACIÓN, QUE PINTE POR CONSOLA CUANDO LOS DOS NOMBRES COINCIDAN
const adrian = 'adrian'
const lennoc = 'valoruno'

if (adrian === "adrian" && lennoc === "valoruno"){
    console.log("muestra los nombres porque al comprobar las dos condiciones se cumplen")
}
// HAZ OTRA COMPROBACIÓN, QUE PINTE CUANDO SOLO UNO DE LOS NOMBRES COINCIDAN
if (adrian ==="adrian" || lennoc ==="lennoc"){
    console.log("ahora muestra cuando solo se cumple uno de ellos")
}
// HAZ OTRA COMPROBACIÓN, CUANDO NINGUN NOMBRE COINCIDA
if (adrian !== "dd" && lennoc !== "dad"){
    console.log("ahora muestra cuando no coincide")
}