import React from 'react'
import { Image, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import Loading from '../../../components/Loading'
import { changeFlags } from '../../../helpers/data'

const RoundOf16 = ({ data, loading }) => {

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                <TitleBox>
                    <Title>Placar</Title>
                </TitleBox>
                {data?.map(match =>
                    <DataTable key={match.id}>
                        <DataTable.Row>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: 30, width: 20 }}
                                    source={changeFlags(match.teamHome.initials)}
                                    resizeMode='contain'
                                />
                            </View>
                            <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{match.teamHome.name}</DataTable.Cell>
                            <DataTable.Cell style={{ flex: 1, justifyContent: 'space-around' }}>2 X 5</DataTable.Cell>
                            <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{match.teamVisiting.name}</DataTable.Cell>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: 30, width: 20 }}
                                    source={changeFlags(match.teamVisiting.initials)}
                                    resizeMode='contain'
                                />
                            </View>
                        </DataTable.Row>
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


export default RoundOf16
