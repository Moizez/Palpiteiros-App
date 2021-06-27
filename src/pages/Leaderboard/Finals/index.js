import React from 'react'
import { DataTable } from 'react-native-paper'
import { addHours, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import Loading from '../../../components/Loading'
import { semifinal, final } from '../../../helpers/data'
import { changeFlags } from '../../../helpers/data'
import logo from '../../../assets/images/logo_euro.png'

const Finals = ({ dataSemi, dataFinals, loading }) => {

    const dateFormat = (date) => {
        const res = parseISO(date)
        const result = addHours(res, 3)
        return format(result, "E dd LLL'\n'H:mm", { locale: pt })
    }

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {dataSemi ?
                    <>
                        <TitleBox>
                            <Title>Semifinal</Title>
                        </TitleBox>

                        {dataSemi?.map(match =>
                            <Card
                                key={match.id}
                                style={{ elevation: 3 }}
                                colors={['#ddd', '#f5f3f4']}
                            >
                                <CardContent>
                                    <FlagBox>
                                        <Image
                                            source={changeFlags(match.teamHome?.initials)}
                                            resizeMode='contain'
                                        />
                                        <FlagText>{match.teamHome?.initials}</FlagText>
                                    </FlagBox>
                                    <InfoBox>
                                        {match.scoreBoard
                                            ? <Text style={{ fontSize: 35 }}>
                                                {match.scoreBoard?.golsHome}
                                                <Text> X </Text>
                                                {match.scoreBoard?.golsVisiting}
                                            </Text>
                                            : <Text>{dateFormat(match.confrontationLocation?.date)}</Text>
                                        }
                                        {(match.scoreBoard && match.scoreBoard?.penalty) &&
                                            <Text style={{ fontSize: 12 }}>
                                                ({match.scoreBoard?.penalty?.golsHome} x {match.scoreBoard?.penalty?.golsVisiting})
                                            </Text>
                                        }
                                    </InfoBox>
                                    <FlagBox>
                                        <Image
                                            source={changeFlags(match.teamVisiting?.initials)}
                                            resizeMode='contain'
                                        />
                                        <FlagText>{match.teamVisiting?.initials}</FlagText>
                                    </FlagBox>
                                </CardContent>
                            </Card>
                        )}
                    </>
                    :
                    <>
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

                    </>
                }

                {dataFinals ?
                    <>
                        <TitleBox>
                            <Title>Final</Title>
                        </TitleBox>

                        {dataFinals?.map(match =>
                            <Card
                                key={match.id}
                                style={{ elevation: 3 }}
                                colors={['#ddd', '#f5f3f4']}
                            >
                                <CardContent>
                                    <FlagBox>
                                        <Image
                                            source={changeFlags(match.teamHome?.initials)}
                                            resizeMode='contain'
                                        />
                                        <FlagText>{match.teamHome?.initials}</FlagText>
                                    </FlagBox>
                                    <InfoBox>
                                        {match.scoreBoard
                                            ? <Text style={{ fontSize: 35 }}>
                                                {match.scoreBoard?.golsHome}
                                                <Text> X </Text>
                                                {match.scoreBoard?.golsVisiting}
                                            </Text>
                                            : <Text>{dateFormat(match.confrontationLocation?.date)}</Text>
                                        }
                                        {(match.scoreBoard && match.scoreBoard?.penalty) &&
                                            <Text style={{ fontSize: 12 }}>
                                                ({match.scoreBoard?.penalty?.golsHome} x {match.scoreBoard?.penalty?.golsVisiting})
                                            </Text>
                                        }
                                    </InfoBox>
                                    <FlagBox>
                                        <Image
                                            source={changeFlags(match.teamVisiting?.initials)}
                                            resizeMode='contain'
                                        />
                                        <FlagText>{match.teamVisiting?.initials}</FlagText>
                                    </FlagBox>
                                </CardContent>
                            </Card>
                        )}
                    </>
                    :
                    <>
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
                    </>
                }

                {dataFinals?.map(match =>
                    <Card
                        key={match.id}
                        style={{ elevation: 3, alignItems: 'center', justifyContent: 'center' }}
                        colors={['#ddd', '#f5f3f4']}
                    >
                        <Image
                            style={{ height: 80, width: 80 }}
                            source={logo}
                            resizeMode='contain'
                        />

                        <CardChampion>
                            <Image
                                style={{ height: 70, width: 60 }}
                                source={changeFlags('ITA')}
                                resizeMode='contain'
                            />
                            <TitleChampion>Itália</TitleChampion>
                        </CardChampion>
                        <TextChampion>campeã da eurocopa 2020</TextChampion>
                    </Card>
                )}

            </Container>
            {loading && <Loading lottie={require('../../../assets/lotties/soccer-field.json')} />}
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

const Card = styled(LinearGradient)`
    flex: 1;
    padding: 10px;
    margin: 10px 20px;
    border-radius: 8px;
`;

const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const FlagBox = styled.View`
    flex: 1;
    align-items: center;
`;

const InfoBox = styled.View`
    flex: 1;
`;

const Text = styled.Text`
    font-family: Quantico-Regular;
    font-size: 17px;
    text-align: center;
`;

const FlagText = styled.Text`
    font-weight: bold;
`;

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`;

const Image = styled.Image`
    height: 60px;
    width: 50px;
`;

const CardChampion = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TextChampion = styled.Text`
    text-transform: uppercase;
    color: #000;
`;

const TitleChampion = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
    font-size: 40px;
    margin-left: 10px;
`;

export default Finals

/*

 <Card
                            key={match.id}
                            style={{ elevation: 3 }}
                            colors={['#ddd', '#f5f3f4']}
                        >
                            <CardContent>
                                <FlagBox>
                                    <Image
                                        source={changeFlags(match.teamHome?.initials)}
                                        resizeMode='contain'
                                    />
                                    <FlagText>{match.teamHome?.initials}</FlagText>
                                </FlagBox>
                                <InfoBox>
                                    {match.scoreBoard
                                        ? <Text style={{ fontSize: 35 }}>
                                            {match.scoreBoard?.golsHome}
                                            <Text> X </Text>
                                            {match.scoreBoard?.golsVisiting}
                                        </Text>
                                        : <Text>{dateFormat(match.confrontationLocation?.date)}</Text>
                                    }
                                    {(match.scoreBoard && match.scoreBoard?.penalty) &&
                                        <Text style={{ fontSize: 12 }}>
                                            ({match.scoreBoard?.penalty?.golsHome} x {match.scoreBoard?.penalty?.golsVisiting})
                                        </Text>
                                    }
                                </InfoBox>
                                <FlagBox>
                                    <Image
                                        source={changeFlags(match.teamVisiting?.initials)}
                                        resizeMode='contain'
                                    />
                                    <FlagText>{match.teamVisiting?.initials}</FlagText>
                                </FlagBox>
                            </CardContent>
                        </Card>

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

*/
