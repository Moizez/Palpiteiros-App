import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    Container, Header, BackButton, HeaderTitle, Ranking, RankingItem, FlatList, Title, Label
} from './styles'

import JackpotRankingList from '../../components/JackpotRankingList'

const items = [
    {
        key: String(Math.random()),
        name: 'João Pedro',
        pos: 1,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/79993349_2552760481512202_3690026628441702400_o.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=-24SuJCFPW4AX-NdVIG&_nc_ht=scontent.fmvf5-1.fna&oh=2bf69f7d27923a016ae4c5640a235076&oe=60570918',
        pts: 100,
     },
    {
        key: String(Math.random()),
        name: 'Charles',
        pos: 2,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/86224631_2590121481113665_40994668271370240_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=a_n9B9ZT2z0AX-cwrVY&_nc_ht=scontent.fmvf5-1.fna&oh=42784dae768e6b6891fed82d75e6eaad&oe=6059728F',
        pts: 89,
    },
    {
        key: String(Math.random()),
        name: 'Ederson',
        pos: 3,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/14633050_1315880675091346_8996346575251593232_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=2lOwTHcTKmQAX9ub0f1&_nc_oc=AQkuCTK7hk2jOGaVOXjGyvbXUEuaV5HxId1SKZN7I2z121MgnwBt4W8WdVDGY5Fkjec&_nc_ht=scontent.fmvf5-1.fna&oh=3b7d45b5d06754fd733d6a507e11ffbe&oe=605719D5',
        pts: 86,
    },
    {
        key: String(Math.random()),
        name: 'Vinícius',
        pos: 4,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/136400047_3785542021530397_8083868005185306646_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=dVIQ8Ve6YkEAX-M3mKe&_nc_ht=scontent.fmvf5-1.fna&oh=a9fdbbe736a0245edaeef413f1ec933c&oe=60598F3C',
        pts: 83,
    },
    {
        key: String(Math.random()),
        name: 'Rômulo',
        pos: 5,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/544712_10201012833062247_1284964790_n.jpg?_nc_cat=106&ccb=3&_nc_sid=09cbfe&_nc_ohc=CFGJ3rtJCycAX-5x8wP&_nc_ht=scontent.fmvf5-1.fna&oh=8f8074b5ae21995ed8a91674c9af85e1&oe=60586E01',
        pts: 78,
    },
    {
        key: String(Math.random()),
        name: 'Gildécio',
        pos: 6,
        image: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/151415790_10215748602222925_6618993603787031519_n.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=IbPeXznF-g0AX-Mv6YP&_nc_ht=scontent.fmvf5-1.fna&oh=8bf9a305af61ad34e464f50e0778cead&oe=60572493',
        pts: 45,
    },
]

const JackporDetails = ({ route, navigation }) => {

    const { data } = route.params

    return (
        <Container>

            <Header>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icon name='chevron-left' size={35} color='#FFF' />
                </BackButton>
                <Title>{data.name}</Title>
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
                data={items}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <JackpotRankingList data={item} />}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    );
}

export default JackporDetails