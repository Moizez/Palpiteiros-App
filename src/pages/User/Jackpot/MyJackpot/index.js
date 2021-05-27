import React from 'react';
import { useNavigation } from '@react-navigation/native'

import MyJackpotList from '../../../../components/MyJackpotList'
import EmptyList from '../../../../components/EmptyList'
import { jackpots } from '../../../../helpers/data'

import {
    Container, Title, Label, FlatList, CreateJackpot, BoxLabel, CircleButton
} from './styles'

const MyJackpot = () => {

    const navigation = useNavigation()

    return (
        <Container>
            <FlatList
                data={jackpots}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <MyJackpotList data={item} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <EmptyList message='Nenhum bolão disponível!' />
                }
            />
            <CreateJackpot onPress={() => navigation.navigate('CreateJackpot')} activeOpacity={1}>
                <BoxLabel>
                    <CircleButton>
                        <Title style={{ fontSize: 22, color: '#FFF' }}>+</Title>
                    </CircleButton>
                    <Label>
                        Crie seu bolão e junte seus amigos para ver quem é o maior
                        palpiteiro de futebol!
                        </Label>
                </BoxLabel>
            </CreateJackpot>
        </Container>
    );
}

export default MyJackpot