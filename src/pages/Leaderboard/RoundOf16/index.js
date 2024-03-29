import React from 'react'
import { DataTable } from 'react-native-paper'
import { addHours, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import Loading from '../../../components/Loading'
import { roundOf16 } from '../../../helpers/data'
import { changeFlags } from '../../../helpers/data'

const RoundOf16 = ({ data, loading }) => {

    const dateFormat = (date) => {
        const res = parseISO(date)
        const result = addHours(res, 3)
        return format(result, "E dd LLL'\n'H:mm", { locale: pt })
    }

    return (
        <>
            {data ?
                <Container showsVerticalScrollIndicator={false}>
                    <TitleBox>
                        <Title>Oitavas de Finais</Title>
                    </TitleBox>

                    {data?.map(match =>
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
                </Container>
                :
                <Container>
                    <TitleBox>
                        <Title>Confrontos das oitavas de finais</Title>
                    </TitleBox>
                    {roundOf16.map(i =>
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

export default RoundOf16
