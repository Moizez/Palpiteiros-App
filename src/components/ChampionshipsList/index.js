import React from 'react';
import { Image } from 'react-native'

import { Container, Title, Label, Card, CardHeader } from './styles'

const ChampionshipsList = ({ data }) => {

    return (
        <Container>
            <Card onPress={() => { }} activeOpacity={0.8}>
                <Image
                    style={{ width: 55, height: 55, marginRight: 10 }}
                    source={{ uri: data.image }}
                    resizeMode='center'
                />
                <CardHeader>
                    <Title>{data.name}</Title>
                    <Label>Ano: {data.year}</Label>
                </CardHeader>
            </Card>
        </Container>
    );
}

export default ChampionshipsList