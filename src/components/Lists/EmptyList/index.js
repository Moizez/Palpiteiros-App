import React from 'react'
import styled from 'styled-components/native';

import logo from '../../../assets/images/logo.png'

const EmptyList = ({ message, tip }) => {
    return (
        <Container>
            <Text>{message}</Text>
            <Image source={logo} />
            <Text>{tip}</Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;


const Text = styled.Text`
    font-size: 16px;
    font-family: ${props => props.theme.fontQBold};
    text-align: center;
    opacity: 0.2;
`;

export const Image = styled.Image`
   width: 180px;
   height: 180px;
   opacity: 0.2;
   margin: 15px 0;
`;


export default EmptyList
