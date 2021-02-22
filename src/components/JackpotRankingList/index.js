import React from 'react';
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Label, Card, CardItem } from './styles'

const JackpotRankingList = ({ data }) => {

    const navigation = useNavigation()

    return (
        <Container>
            <Card onPress={() => navigation.navigate('Profile', { data: data })} activeOpacity={0.8}>
                <CardItem style={{ flex: 1 }}>
                    <Label>{data.pos}</Label>
                </CardItem>
                <CardItem style={{ flex: 2, flexDirection: 'row', alignContent: 'flex-start' }}>
                    <Image
                        style={{
                            marginRight: 15,
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            borderWidth: 0.5,
                            borderColor: '#FFF'
                        }}
                        source={{ uri: data.image }}
                        resizeMode='cover'
                    />
                    <Label>{data.name}</Label>
                </CardItem>
                <CardItem style={{ flex: 1 }}>
                    <Label>{data.pts}</Label>
                </CardItem>
            </Card>
        </Container>
    );
}

export default JackpotRankingList