import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import logo from '../../../assets/images/logo_euro.png'

import {
    Container, Title, Label, Card, CardHeader, Image,
    VerticalDivider, UserBox, ImageBox
} from './styles'

const MySweepstakesList = ({ data }) => {

    const navigation = useNavigation()
    const {
        id: idJackpot,
        name: jackpotName,
        championship: {
            year,
            confrontations,
            id: idChampionship
        }
    } = data

    return (
        <>
            <Container
                activeOpacity={0.9}
                onPress={() => navigation.navigate('Hunchs', {
                    idChampionship: idChampionship,
                    idJackpot: idJackpot
                })}
            >
                <Card
                    style={{ elevation: 3 }}
                    colors={['#52b788', '#95d5b2']}
                >
                    <ImageBox>
                        <Image
                            source={logo}
                            resizeMode='contain'
                        />
                    </ImageBox>

                    <VerticalDivider />

                    <CardHeader>
                        <Title>{jackpotName}</Title>
                        <Label>Edição: {year}</Label>
                        <Label>Início: 11/06/21</Label>
                        <Label>Nº de confrontos: {confrontations?.length}</Label>
                        <Label>Criado por: Palpiteiros</Label>
                    </CardHeader>
                    <UserBox>
                        <Icon name='account-group' size={20} color='#022c6f' />
                        <Label style={{ marginLeft: 10 }}>{data?.users.length}</Label>
                    </UserBox>
                </Card>
            </Container>
        </>
    );
}

export default MySweepstakesList