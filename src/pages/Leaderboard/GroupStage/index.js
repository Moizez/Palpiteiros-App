import React from 'react'
import { Image, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native';

import { changeFlags } from '../../../helpers/data'

const GroupStage = ({ data }) => {

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {data?.map(group =>
                    <DataTable key={group.id} style={{backgroundColor: '#FFF'}}>
                        <TitleBox>
                            <Title>Grupo {group.name}</Title>
                        </TitleBox>
                        <DataTable.Header style={{backgroundColor: '#ccc'}}>
                            <DataTable.Title style={{ flex: 0.3 }}>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 2.5}} >
                                <Text>SELEÇÕES</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>
                                <Text>P</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>
                                <Text>J</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>
                                <Text>V</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>
                                <Text>E</Text>
                            </DataTable.Title>
                            <DataTable.Title style={{ flex: 0.5 }} numeric>
                                <Text>D</Text>
                            </DataTable.Title>
                        </DataTable.Header>
                        {group?.punctuations?.map((punctuation, index) => (
                            <DataTable.Row key={punctuation.id} style={{
                                backgroundColor: index < 2 ? '#ddd' : index === 2 ? '#eee' : null
                            }}>
                                <DataTable.Cell style={{ flex: 0.3 }}>
                                    {punctuation.position === 0 ? '' : punctuation.position + 'º'}
                                </DataTable.Cell>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        style={{ height: 40, width: 30 }}
                                        source={changeFlags(punctuation.team.initials)}
                                        resizeMode='contain'
                                    />
                                </View>
                                <DataTable.Cell style={{ flex: 2, marginLeft: 3 }}>{punctuation.team.name}</DataTable.Cell>
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
        </>
    )
}

const Container = styled.ScrollView``;

const TitleBox = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #495057;
    padding: 8px;
`;

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`;

const Text = styled.Text`
    color: #000;
    font-weight: bold;
`;

export default GroupStage
