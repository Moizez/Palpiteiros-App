import React from 'react'
import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png'

const EmptyList = ({ message }) => {
    return (
        <Container>
            <Text>{message}</Text>
            <Image source={logo} />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 30%;
    align-items: center;
    justify-content: center;
`;


const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
    opacity: 0.2;
`;

export const Image = styled.Image`
   width: 180px;
   height: 180px;
   opacity: 0.1;
`;


export default EmptyList
