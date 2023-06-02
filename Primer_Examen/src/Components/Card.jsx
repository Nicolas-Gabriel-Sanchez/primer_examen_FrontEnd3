import React from 'react';

function Card({documento, apellidoMes}) {
    return (

        <div className='card'>

            <h5>Ya estas participando!!</h5>
            <h5>Tus últimos 3 digitos del dni son: {documento}</h5>
            <h5>Tu apellido y mes de nacimiento es: {apellidoMes}</h5>
            
        </div>
    );
}

export default Card;