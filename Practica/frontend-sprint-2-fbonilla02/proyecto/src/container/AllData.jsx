import React from 'react'
import styled from 'styled-components';
import GetShop from './GetComponets/GetShop';

export default function AllData() {
    const [products] = GetShop([])
    console.log(products);
  return (

    <div>
       <DivTitulos>
       <div>
        <p>Tiendas</p>
        { products.map(data =>(
                <div key={data.id}>
                    <div >{data.tiendas}</div>
                </div>

        ))}
        </div>
        <p>Productos</p>
        <p>Acciones</p>
       </DivTitulos>
               
            

    </div>
  )
}

export const DivTitulos = styled.div`
display: flex;
flex-direction:column;

align-items: center;
justify-content: space-around;

`