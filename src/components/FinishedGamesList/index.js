import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { addHours, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '../../services/api_hunchs'
import { changeFlags } from '../../helpers/data'

import {
    Container, Card, CardHeader, InfoHeader, CardHunch, Score,
    HunchInfo, HunchScoreBox, Team, HunchScore, TeamName,
    HunchText, ScoreText, Status, Label, Divider, Flag, Text
} from './styles'

const FinishedGamesList = ({ data, idJackpot, isRefresh }) => {

    const [hunch, setHunch] = useState([])

    const getHunch = async () => {
        const response = await api.getOneByConfrontationAndJackpotAndUser(data.id, idJackpot)
        setHunch(response.data)
    }

    useEffect(() => {
        getHunch()
    }, [isRefresh])

    const dateFormat = (date) => {
        const res = parseISO(date)
        const result = addHours(res, 3)
        return format(result, "d 'de' LLL 'às' H:mm", { locale: pt })
    }

    const getStatus = () => {
        if (hunch?.resultHunch) {
            const isAccuracy = hunch?.resultHunch?.registerHunch?.accuracy
            const isHit = hunch?.resultHunch?.registerHunch?.hit

            if (isAccuracy) return '#38b000'
            if (isHit) return '#00b4d8'
            else return '#da1e37'

        } else {
            return null
        }
    }

    return (
        <>
            <Container>
                <Card
                    style={{ elevation: 3 }}
                    colors={['#ddd', '#f5f3f4']}
                >
                    <CardHeader>
                        <InfoHeader>
                            <Icon name='soccer-field' size={22} color='#072' />
                            <Label>{data.confrontationLocation?.stadium?.name}</Label>
                        </InfoHeader>

                        <InfoHeader>
                            <Icon name='av-timer' size={22} color='#da1e37' />
                            <Label>{dateFormat(data.confrontationLocation?.date)}</Label>
                        </InfoHeader>

                    </CardHeader>

                    <Divider />

                    <CardHunch>

                        {data.scoreBoard &&
                            <Score>
                                <ScoreText>{data?.teamHome?.initials} {data.scoreBoard?.golsHome}</ScoreText>
                                <ScoreText> x </ScoreText>
                                <ScoreText>{data.scoreBoard?.golsVisiting} {data?.teamVisiting?.initials}</ScoreText>
                            </Score>
                        }

                        <HunchInfo>
                            <Team>
                                <Flag source={changeFlags(data?.teamHome?.initials)} />
                                <TeamName>{data?.teamHome?.initials}</TeamName>
                            </Team>

                            <HunchScoreBox>
                                <HunchScore>
                                    <HunchText>
                                        {(hunch?.resultHunch?.golsHome || hunch?.resultHunch?.golsHome === 0)
                                            ? hunch?.resultHunch?.golsHome
                                            : '_'
                                        }
                                    </HunchText>
                                </HunchScore>
                                <HunchText>x</HunchText>
                                <HunchScore>
                                    <HunchText>
                                        {(hunch?.resultHunch?.golsVisiting || hunch?.resultHunch?.golsVisiting === 0)
                                            ? hunch?.resultHunch?.golsVisiting
                                            : '_'
                                        }
                                    </HunchText>
                                </HunchScore>
                            </HunchScoreBox>
                            <Team>
                                <Flag source={changeFlags(data?.teamVisiting?.initials)} />
                                <TeamName>{data?.teamVisiting?.initials}</TeamName>
                            </Team>
                        </HunchInfo>

                        <Status>
                            <Text>
                                {getStatus() === '#38b000'
                                    ? '+3'
                                    : getStatus() === '#00b4d8'
                                        ? '+1'
                                        : null
                                }
                            </Text>
                            <Icon name='soccer' size={18} color={getStatus()} />
                        </Status>


                    </CardHunch>

                </Card>
            </Container>
        </>
    );
}

export default FinishedGamesList
