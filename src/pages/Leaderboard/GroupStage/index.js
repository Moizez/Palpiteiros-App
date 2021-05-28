import React, { useState, useEffect } from 'react'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import Loading from '../../../components/Loading'

const GroupStage = ({ data, loading }) => {

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {data?.map(group =>
                    <DataTable>
                        <TitleBox>
                            <Title>Grupo {group.name}</Title>
                        </TitleBox>
                        <DataTable.Header>
                            <DataTable.Title style={{ flex: 2 }} >SELEÇÃO</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>P</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>J</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>V</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>E</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>D</DataTable.Title>
                        </DataTable.Header>
                        {group?.punctuations?.map(i => (
                            <DataTable.Row key={i.id}>
                                <DataTable.Cell style={{ flex: 2 }}>{i.team.name}</DataTable.Cell>
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

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
`;

export default GroupStage
