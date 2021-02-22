import React from 'react';
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, Label, Card, CardHeader } from './styles'

const MyJackpotList = ({ data }) => {

    const navigation = useNavigation()

    return (
        <Container>
            <Card onPress={() => navigation.navigate('JackporDetails', { data: data })} activeOpacity={0.8}>
                <CardHeader>
                    <Title>{data.name}</Title>
                    <Label>Criado por: {data.create}</Label>
                </CardHeader>
                <Image
                    style={{ width: 60, height: 60 }}
                    source={{ uri: data.image }}
                    resizeMode='center'
                />
            </Card>
        </Container>
    );
}

export default MyJackpotList