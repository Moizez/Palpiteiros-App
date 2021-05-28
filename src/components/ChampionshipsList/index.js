import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import { Container, Title, Label, Card, CardHeader } from './styles'

const ChampionshipsList = ({ data }) => {
    const { id, name, year } = data
    const navigation = useNavigation()

    return (
        <Container>
            <Card onPress={() => navigation.navigate('Leaderboard', { id, name, year })} activeOpacity={0.8}>
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