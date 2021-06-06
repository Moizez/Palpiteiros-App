import React from 'react'
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/images/logo_euro.png'

import {
    Container, Title, Label, Card, CardHeader, Image
} from './styles'

const MyJackpotList = ({ data }) => {

    const navigation = useNavigation()
    const { id: idJackpot, championship: { year, id: idChampionship } } = data

    return (
        <>
            <Container>
                <Card
                    onPress={() => navigation.navigate('Hunchs', {
                        idChampionship: idChampionship,
                        idJackpot: idJackpot

                    })}
                    activeOpacity={0.8}
                >
                    <Image
                        source={logo}
                        resizeMode='contain'
                    />
                    <CardHeader>
                        <Title>{data.name}</Title>
                        <Label>Edição: {year}</Label>
                        <Label>Início: Sex. 11/06 às 16h</Label>
                    </CardHeader>
                </Card>
            </Container>
        </>
    );
}

export default MyJackpotList