import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import JackpotRankingList from '../../../../components/JackpotRankingList'

import { users } from '../../../../helpers/data'

import {
    Container, Header, BackButton, HeaderTitle, Ranking,
    RankingItem, FlatList, Title, Label
} from './styles'

const JackpotDetails = () => {

    const navigation = useNavigation()

    return (
        <Container>

            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon name='chevron-down' size={35} color='#FFF' />
                </BackButton>
                <Title>Teste</Title>
                <BackButton>
                    <Icon name='dots-vertical' size={30} color='#FFF' />
                </BackButton>
            </Header>

            <HeaderTitle>
                <Title style={{ marginRight: 20, fontSize: 20 }}>Ranking</Title>
                <Icon name='crown-outline' size={30} color='#FFF' />
            </HeaderTitle>

            <Ranking>
                <RankingItem style={{ flex: 1 }}>
                    <Label>POS</Label>
                </RankingItem>
                <RankingItem style={{ flex: 2 }}>
                    <Label>JOGADOR</Label>
                </RankingItem>
                <RankingItem style={{ flex: 1 }}>
                    <Label>PTS</Label>
                </RankingItem>
            </Ranking>

            <FlatList
                data={users}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <JackpotRankingList data={item} />}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    );
}

export default JackpotDetails