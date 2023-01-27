
function calcularPropina(total, propina){

    const porcentajePropina = total *  (propina / 100);
    return Math.round(porcentajePropina);
}


function onClickBtnPriceDiscount(){
    //Declaracion de los inputs
    const inputTotal = document.getElementById("inputTotal");
    const totalValue = inputTotal.value;
    const inputPropina = document.getElementById("inputPropina");
    const propinaValue = inputPropina.value;

    if (totalValue === '' || propinaValue === '') {
        alert('Por favor rellene los campos');
    }else{
    //Calcular Propina
    const porcentajePropina = calcularPropina(totalValue, propinaValue);
    const totalFactura = Number(totalValue) + porcentajePropina;

    const divOne = document.querySelector('#resultP');
    //uso de ClassList
    divOne.classList.remove('ocult');
    divOne.classList.add('result2');

    //Manipulacion del DOM para mostrar el resultado
    const resultP = document.getElementById("resultP");
    resultP.innerHTML = `<h2>Resumen</h2>
    <p>Valor inicial: ${totalValue} </p>
    <p>Valor propina: ${porcentajePropina}</p>
    <p>Total Factura: ${totalFactura}</p>
    <button id="borrar">Limpiar</button>`;

      //Boton Borrar
        let inputs = document.querySelectorAll('input')
        const borrar = document.getElementById('borrar');

        borrar.addEventListener('click',()=>{
        inputs.forEach(input => input.value = '');
        divOne.classList.add('ocult');
        divOne.classList.remove('result2')
    } )

    }
}