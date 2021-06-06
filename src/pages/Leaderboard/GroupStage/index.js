import React from 'react'
import { Image, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import Loading from '../../../components/Loading'
import { changeFlags } from '../../../helpers/data'

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
                            <DataTable.Title style={{ flex: 2.5 }} >SELEÇÕES</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>P</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>J</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>V</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>E</DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>D</DataTable.Title>
                        </DataTable.Header>
                        {group?.punctuations?.map((punctuation, index) => (
                            <DataTable.Row key={punctuation.id} style={{
                                backgroundColor: index < 2 ? '#022c6f' : index === 2 ? '#022a5a' : null, color: '#fff'}}>
                                <DataTable.Cell style={{ flex: 0.5}}>
                                    {punctuation.position === 0 ? 1 : punctuation.position}
                                </DataTable.Cell>
                                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{ height: 40, width: 30 }}
                                        source={changeFlags(punctuation.team.initials)}
                                        resizeMode='contain'
                                    />
                                </View>
                                <DataTable.Cell style={{ flex: 2, marginLeft: 5 }}>{punctuation.team.name}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{punctuation.points}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{punctuation.matchs}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{punctuation.victory}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{punctuation.draw}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 0.5 }} numeric>{punctuation.defeat}</DataTable.Cell>
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
