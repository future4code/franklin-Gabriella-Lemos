import React from 'react';
import styled from 'styled-components';

const EstiloCardPequeno = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 10px 10px;
margin-bottom: 10px;
width: 40vw
`
const ImgCardPequeno = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
}
`


function CardPequeno (props){
    return(
        <EstiloCardPequeno className='smalcard-container'>
            <ImgCardPequeno src={props.imagem} alt={props.alt}/>
            <h4>{props.titulo}</h4>
            <p>{props.texto}</p>
        </EstiloCardPequeno>

    )
}

export default CardPequeno