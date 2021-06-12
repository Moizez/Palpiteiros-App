import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    Container, Title, Label, Card, CardHeader
    , Image, VerticalDivider
} from './styles'

const ChampionshipsList = ({ data }) => {
    const { id, name, year } = data
    const navigation = useNavigation()

    return (
        <Container
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Leaderboard', { id, name, year })}
        >
            <Card
                style={{ elevation: 3 }}
                colors={['#ddd', '#fff']}
            >
                <Image
                    source={require('../../assets/images/logo_euro.png')}
                    resizeMode='contain'
                />

                <VerticalDivider />

                <CardHeader>
                    <Title>{data.name}</Title>
                    <Label>Edição: {data.year}</Label>
                    <Label>Início: 11/06/21</Label>
                    <Label>Nº de Seleções: 24</Label>
                </CardHeader>
            </Card>
        </Container>
    );
}

export default ChampionshipsList
