let panico = 0;
let trauma = 0;
let fisico = 0;
let cuentap = 0;
let cuentat = 0;
let cuentaf = 0;


    for (let i = 1; i <= 5; i++) {
        const valor = prompt("digite (P) para Pánico, (T) para trauma mental y (F), para daño físico.");
        console.log(i);
        const mini = valor.toLowerCase()
        if (mini === "p") {
            let cantidad = prompt("digite del 1 al 10 cuanto de panico")
            let num = parseFloat(cantidad)
            panico += num;
            cuentap += 1;
        } else if(mini === "t"){
            const cantidad = prompt("digite del 1 al 10 cuanto de trauma mental")
            let num = parseFloat(cantidad)
            trauma += num;
            cuentat += 1;
        }else if(mini === "f"){
            const cantidad = prompt("digite del 1 al 10 cuanto de daño fisico")
            let num = parseFloat(cantidad)
            fisico += num;
            cuentaf += 1;
        }else{
            alert("no es ninguno")
            i--;
        }
    }

// const totalTrauma = panico / cuentap;
// alert("el promedio es " + totalTrauma )
function entraste(damage,cuenta){
    const totalTrauma = damage / cuenta;
    return totalTrauma;
}

alert('tuvo '+ cuentap + ' situaciones de  panico')
alert('tuvo '+ cuentat + ' situaciones de  trauma')
alert('tuvo '+ cuentaf + ' situaciones de  daño fisico')

const pdamage = entraste(panico,cuentap )
const tdamage = entraste(trauma,cuentat )
const fdamage = entraste(fisico,cuentaf )

alert('el promedio es: '+ pdamage)
alert('el promedio es: '+ tdamage)
alert('el promedio es: '+ fdamage)


if(tdamage >= 7.0 || fdamage >= 7.0 ){
    alert("Se aplica el maximo castigo para el acusado")
}
