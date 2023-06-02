import React from 'react';

function Formulario({setDocumento, setApellidoMes, handleSubmit}) {

    return (

        <div className='formulario'>

            <form onSubmit={handleSubmit}>

                <label > Ingresa tus últimos 3 digitos de tu documento: </label>
                <input type="text" onChange={ (e) => setDocumento(e.target.value) } />
    
                <label> Ingresa tu apellido y tu mes de nacimiento separado por un espacio:</label>
                <input type="text" onChange={ (e) => setApellidoMes(e.target.value) } />
    
                <button> ! Participar !</button>

            </form>

        </div>

    );
}

export default Formulario;