import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import Loading from '../../../components/Loading'
import { semifinal, final } from '../../../helpers/data'
import { changeFlags } from '../../../helpers/data'

const Finals = ({ dataSemi, dataFinals, loading }) => {

    const [champion, setChampion] = useState(null)

    const getChampion = (homeGoals, awayGoals, home, away) => {
        if (homeGoals > awayGoals) {
            setChampion(home)
        } else {
            setChampion(away)
        }
    }

    return (
        <>
            {dataSemi ?
                <Container showsVerticalScrollIndicator={false}>
                    <TitleBox>
                        <Title>Semifinal</Title>
                    </TitleBox>

                    {dataSemi?.map(match =>
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
                                <DataTable.Cell style={{ flex: 1, justifyContent: 'space-around' }}>{match.scoreBoard?.golsHome} X {match.scoreBoard?.golsVisiting}</DataTable.Cell>
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
                :
                <Container>
                    <TitleBox>
                        <Title>Confrontos das Semifinais</Title>
                    </TitleBox>
                    {semifinal.map(i =>
                        <DataTable key={i.id}>
                            <DataTable.Header style={{ backgroundColor: '#ccc' }}>
                                <DataTable.Title
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    {i.title}
                                </DataTable.Title>
                                <DataTable.Title
                                    style={{
                                        flex: 4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    {i.info}
                                </DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{i.home}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 1, justifyContent: 'space-around' }}>X</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{i.away}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    )}

                </Container>
            }

            {dataFinals ?
                <Container showsVerticalScrollIndicator={false}>
                    <TitleBox>
                        <Title>Final</Title>
                    </TitleBox>

                    {dataFinals?.map(match =>
                        <Container key={match.id}>
                            <DataTable>
                                <DataTable.Row>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Image
                                            style={{ height: 30, width: 20 }}
                                            source={changeFlags(match.teamHome.initials)}
                                            resizeMode='contain'
                                        />
                                    </View>
                                    <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{match.teamHome.name}</DataTable.Cell>
                                    <DataTable.Cell style={{ flex: 1, justifyContent: 'space-around' }}>{match.scoreBoard?.golsHome} X {match.scoreBoard?.golsVisiting}</DataTable.Cell>
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
                            {match.scoreBoard.golsHome &&
                                <>
                                    <TitleBox style={{ marginTop: 30 }}>
                                        <Title>campeão da eurocopa 2020</Title>
                                    </TitleBox>
                                    <DataTable>
                                        <DataTable.Header style={{ backgroundColor: '#ccc' }}>
                                            <DataTable.Title
                                                style={{
                                                    flex: 1,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <Text>
                                                    {match.scoreBoard?.golsHome > match.scoreBoard?.golsVisiting
                                                        ? match.teamHome.name
                                                        : match.teamVisiting.name
                                                    }
                                                </Text>
                                            </DataTable.Title>
                                        </DataTable.Header>
                                    </DataTable>
                                </>
                            }
                        </Container>
                    )}
                </Container>
                :
                <Container>
                    <TitleBox>
                        <Title>Confronto da Final</Title>
                    </TitleBox>
                    {final.map(i =>
                        <DataTable key={i.id}>
                            <DataTable.Header style={{ backgroundColor: '#ccc' }}>
                                <DataTable.Title
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    {i.title}
                                </DataTable.Title>
                                <DataTable.Title
                                    style={{
                                        flex: 4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    {i.info}
                                </DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{i.home}</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 1, justifyContent: 'space-around' }}>X</DataTable.Cell>
                                <DataTable.Cell style={{ flex: 2, justifyContent: 'space-around' }}>{i.away}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    )}
                </Container>
            }
            {loading && <Loading />}
        </>
    )
}

const Container = styled.ScrollView``;

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
    font-size: 18px;
    color: #000;
`;


export default Finals
