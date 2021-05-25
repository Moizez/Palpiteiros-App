import React from 'react';
import { useNavigation } from '@react-navigation/native'

import MyJackpotList from '../../../../components/MyJackpotList'

import {
    Container, Title, Label, FlatList, CreatJackpot, BoxLabel, CircleButton
} from './styles'

const items = [
    {
        key: String(Math.random()),
        name: 'Bolão da Galera',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Moisés',
     },
    {
        key: String(Math.random()),
        name: 'Bolão do Vina',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Vinicius',
    },
    {
        key: String(Math.random()),
        name: 'Bolão das Gatinhas',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Antônio'
    },
    {
        key: String(Math.random()),
        name: 'Bolão da Bagaceira',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Arthur'
    },
    {
        key: String(Math.random()),
        name: 'Bolão do Gamer True',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Ivan Jr'
    },
    {
        key: String(Math.random()),
        name: 'Bolão do Mala',
        image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
        create: 'Jeferson'
    },
]

const MyJackpotTab = () => {

    const navigation = useNavigation()

    return (
        <>
            <Container>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => <MyJackpotList data={item} />}
                    showsVerticalScrollIndicator={false}
                />
                <CreatJackpot onPress={() => navigation.navigate('CreateJackpot')} activeOpacity={1}>
                    <BoxLabel>
                        <CircleButton>
                            <Title style={{ fontSize: 45, color: '#022c6f' }}>+</Title>
                        </CircleButton>
                        <Label>Crie seu bolão e junte seus amigos para ver quem é o maior
                        palpiteiro de futebol!
                    </Label>
                    </BoxLabel>
                </CreatJackpot>
            </Container>

        </>
    );
}

export default MyJackpotTab