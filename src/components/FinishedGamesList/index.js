import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { addHours, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '../../services/api_hunchs'
import { changeFlags } from '../../helpers/data'

import {
    Container, Card, CardHeader, InfoHeader,
    CardHunch, Score, HunchInfo, HunchScoreBox,
    Team, HunchScore, TeamName, Status, HunchText,
    ScoreText, Text, Label, Divider, Flag
} from './styles'

const FinishedGamesList = ({ data, idJackpot, isRefresh }) => {

    const [hunch, setHunch] = useState([])
    const [status, setStatus] = useState({
        text: '',
        color: ''
    })

    const getHunch = async () => {
        const response = await api.getOneByConfrontationAndJackpotAndUser(data.id, idJackpot)
        setHunch(response.data)
    }

    useEffect(() => {
        getHunch()
        getStatus()
    }, [isRefresh])

    const dateFormat = (date) => {
        const res = parseISO(date)
        const result = addHours(res, 3)
        return format(result, "d 'de' LLL 'às' H:mm", { locale: pt })
    }

    const getStatus = () => {
        if (hunch?.resultHunch) {
            const isAccuracy = hunch?.resultHunch?.registerHunch?.accuracy
            const isHit = hunch?.resultHunch?.registerHunch?.accuracy

            if (isAccuracy) return setStatus({ text: 'Placar Exato', color: '#43aa8b' })
            else if (isHit) return setStatus({ text: 'Vencedor', color: '#219ebc' })
            else return setStatus({ text: 'Errou', color: '#da1e37' })
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
                                            : '__'
                                        }
                                    </HunchText>
                                </HunchScore>
                                <Icon name='alpha-x' size={50} color='#000' />
                                <HunchScore>
                                    <HunchText>
                                        {(hunch?.resultHunch?.golsVisiting || hunch?.resultHunch?.golsVisiting === 0)
                                            ? hunch?.resultHunch?.golsVisiting
                                            : '__'
                                        }
                                    </HunchText>
                                </HunchScore>
                            </HunchScoreBox>
                            <Team>
                                <Flag source={changeFlags(data?.teamVisiting?.initials)} />
                                <TeamName>{data?.teamVisiting?.initials}</TeamName>
                            </Team>
                        </HunchInfo>
                        <Score>
                            {data.scoreBoard &&
                                <>
                                    <ScoreText>{data.scoreBoard?.golsHome}</ScoreText>
                                    <Icon name='alpha-x' size={25} color='#da1e37' />
                                    <ScoreText>{data.scoreBoard?.golsVisiting}</ScoreText>
                                </>
                            }
                        </Score>

                        {data.scoreBoard && hunch?.resultHunch &&
                            <Status style={{
                                backgroundColor: status.color,
                                borderRadius: 5,
                            }}>
                                <Text>{status.text}</Text>
                            </Status>
                        }

                    </CardHunch>

                </Card>
            </Container>
        </>
    );
}

export default FinishedGamesList
