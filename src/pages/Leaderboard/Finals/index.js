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

const Finals = ({ dataFinals, champion, viceChampion, loading }) => {

    const dateFormat = (date) => {
        const res = parseISO(date)
        const result = addHours(res, 3)
        return format(result, "E dd LLL'\n'H:mm", { locale: pt })
    }

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
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

                {champion &&
                    <Card
                        style={{ elevation: 3, alignItems: 'center', justifyContent: 'center' }}
                        colors={['#fdc500', '#ffea00']}
                    >
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={logo}
                            resizeMode='contain'
                        />

                        <CardChampion>
                            <Image
                                style={{ height: 40, width: 30 }}
                                source={changeFlags(champion?.initials)}
                                resizeMode='contain'
                            />
                            <TitleChampion>{champion?.name}</TitleChampion>
                        </CardChampion>
                        <TextChampion>campeã da eurocopa 2020</TextChampion>
                    </Card>
                }

                {(champion && viceChampion) &&
                    <Card
                        style={{ elevation: 3, alignItems: 'center', justifyContent: 'center' }}
                        colors={['#ddd', '#f5f3f4']}
                    >
                        <CardChampion>
                            <TextChampion style={{ fontSize: 13 }}>Vice-campeã: </TextChampion>
                            <Image
                                style={{ height: 30, width: 20 }}
                                source={changeFlags(viceChampion?.initials)}
                                resizeMode='contain'
                            />
                            <TitleChampion style={{ fontSize: 16 }}>{viceChampion?.name}</TitleChampion>
                        </CardChampion>
                    </Card>
                }

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
    margin: 10px 20px 5px 20px;
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
    font-family: ${props=>props.theme.fontQRegular};
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
    font-size: 25px;
    margin-left: 10px;
`;

export default Finals

