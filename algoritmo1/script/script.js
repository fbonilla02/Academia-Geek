let enanos = parseFloat(prompt("Enanos Muertos"));
let elfos = parseFloat(prompt("elfos Muertos"))
let humanos = parseFloat(prompt("humanos Muertos"))
let orcos = parseFloat(prompt("orcos Muertos"))
let huargos = parseFloat(prompt("huargos Muertos"))


const edadMedia = [{
    enanos: enanos,
    elfos: elfos,
    humanos: humanos,
    orcos: orcos,
    huargos: huargos,
}]




// valores iniciales
const valor = edadMedia[0];
const valores = Object.values(valor);
const key =  Object.keys(valor)

//2 Raza con mas muertos
function masMuertos(valores){
    let mayor = Math.max(...valores);
    const name = Object.keys(valor).filter(element => valor[element] === mayor)
    alert("Se han muerto mas "+ name  +  " con un numero de " + mayor  )
}



//3 Raza con menos muertos
function menosMuertos(valores){


    let menor = Math.min(...valores);
    const name = Object.keys(valor).filter(element => valor[element] === menor)
;
    alert("Se han muerto menos " + name  + " con un numero de " + menor  )

}




//Total muertos
function cantMuertos(valores) {
    inicial = 0;
    let muertos = valores.reduce((a,b) => a + b, inicial )

    alert("la cantidad total de muertos es: " + muertos )
    return muertos;
}





// sacar porcentaje
function porcentaje( valores){

for (let i = 0; i < key.length; i++) {
    let clave = key[i]
    numbers = valor[clave]
    let porcentMuer = (numbers / valores) * 100;
    alert("el porcentaje de muertos es " + Math.round(porcentMuer) + "% de " + clave )

}


}
const totalM = cantMuertos(valores)
porcentaje( totalM)
masMuertos(valores)
menosMuertos(valores)