import React from 'react'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'
import JackpotRankingList from '../../../../components/JackpotRankingList'
import Header from '../../../../components/Header'

const JackpotDetails = ({ route }) => {

    const { data, jackpotName } = route.params

    return (
        <Container>

            <Header
                title={jackpotName}
                hasIcon
            />

            <TitleBox>
                <Title>Classificação</Title>
            </TitleBox>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title><Text>Posição</Text></DataTable.Title>
                    <DataTable.Title><Text>Nome</Text></DataTable.Title>
                    <DataTable.Title numeric><Text>Pontos</Text></DataTable.Title>
                </DataTable.Header>
            </DataTable>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <JackpotRankingList data={item} />}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    );
}

const Container = styled.View`
flex:1;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
margin-bottom: 10px;
`;

const TitleBox = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #1d4e89;
    padding: 8px;
`;

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`;

const Text = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
`;


export default JackpotDetails