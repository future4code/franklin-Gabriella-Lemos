import React from 'react';
import './CardPequeno.css'

function CardPequeno (props){
    return(
        <div className='smalcard-container'>
            <img src={props.imagem} alt={props.alt}/>
            <p>{props.titulo}</p>
            <p>{props.texto}</p>
        </div>

    )
}

export default CardPequeno