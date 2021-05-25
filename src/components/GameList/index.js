import React from 'react';
import { Image } from 'react-native'

import { Container, Title, Label, Card, CardHeader } from './styles'

const GameList = ({ data }) => {

    return (
        <Container>
            <Card>
                <CardHeader>
                    <Title>{data.nome_popular}</Title>
                    <Label>{data.edicao_atual.nome_popular}</Label>
                </CardHeader>
                <Image
                    style={{ width: 60, height: 60 }}
                    source={{ uri: data.logo }} 
                    resizeMode='center'
                    />
            </Card>
        </Container>
    );
}

export default GameList