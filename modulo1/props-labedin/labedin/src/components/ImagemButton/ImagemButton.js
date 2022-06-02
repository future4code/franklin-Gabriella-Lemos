import React from 'react';
import styled from 'styled-components';

const EstiloImagemButton = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
`
const ImgButton = styled.img`
width: 30px;
margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <EstiloImagemButton className="image-button-container">
            <ImgButton src={ props.imagem } alt={props.alt}/>
            <p>{ props.texto }</p>
        </EstiloImagemButton>

    )
}

export default ImagemButton;