import React from 'react'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import Loading from '../../../components/Loading'

const GroupStage = ({ data, loading }) => {

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {data?.map(group =>
                    <DataTable key={group.id}>
                        <TitleBox>
                            <Title>Grupo {group.name}</Title>
                        </TitleBox>
                        <DataTable.Header>
                            <DataTable.Title style={{ flex: 0.5 }}></DataTable.Title>
                            <DataTable.Title style={{ flex: 2 }} >SELEÇÃO</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>P</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>J</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>V</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>E</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>D</DataTable.Title>
                        </DataTable.Header>
                        {group?.punctuations?.map(i => (
                            <DataTable.Row key={i.id}>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>
                                    <Image
                                        source={{
                                            uri: `https://palpiteiros-api.herokuapp.com/api/teams/findByShield/${i.team.id}`,
                                        }}
                                    />
                                </DataTable.Cell>
                                <DataTable.Cell style={{ flex: 2, marginLeft: 5 }}>{i.team.initials}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{i.points}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{i.matchs}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{i.victory}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{i.draw}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{i.defeat}</DataTable.Cell>
                            </DataTable.Row>
                        ))}
                    </DataTable>
                )}
            </Container>
            {loading && <Loading />}
        </>
    )
}

const Container = styled.ScrollView``;

const TitleBox = styled.View`
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.1);
    padding: 8px;
`;

const Image = styled.Image`
    width: 30px;
    height: 30px;
`;

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
`;


export default GroupStage
