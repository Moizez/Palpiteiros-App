import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, Label, Card, CardHeader, Image } from './styles'

const ChampionshipsList = ({ data }) => {
    const { id, name, year } = data
    const navigation = useNavigation()

    return (
        <Container>
            <Card
                style={{elevation: 3}}
                onPress={() => navigation.navigate('Leaderboard', { id, name, year })}
                activeOpacity={0.8}
            >
                <Image
                    source={require('../../assets/images/logo_euro.png')}
                    resizeMode='contain'
                />
                <CardHeader>
                    <Title>{data.name}</Title>
                    <Label>Edição: {data.year}</Label>
                    <Label>Início: Sex. 11/06 às 16h</Label>
                </CardHeader>
            </Card>
        </Container>
    );
}

export default ChampionshipsList
