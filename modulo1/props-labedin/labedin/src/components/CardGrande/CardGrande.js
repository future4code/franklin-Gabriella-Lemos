import React from 'react';
import styled from 'styled-components'

const EstiloCardGrande = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const ImgCardGrande = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`
const DivCardGRande = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`
const H4CardGrande = styled.h4`
margin-bottom: 15px;
`
const PCardGrande = styled.p`
display: flex;
flex-direction: column;
justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <EstiloCardGrande className="bigcard-container">
            <ImgCardGrande src={ props.imagem } alt={props.alt}/>
            <DivCardGRande>
                <H4CardGrande>{ props.nome }</H4CardGrande>
                <PCardGrande>{ props.descricao }</PCardGrande>
            </DivCardGRande>
        </EstiloCardGrande>
    )
}

export default CardGrande;