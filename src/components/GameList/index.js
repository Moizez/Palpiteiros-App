import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import HunchModal from '../Modals/HunchModal'
import { changeFlags } from '../../helpers/data'

import {
    Container, Card, CardHeader, InfoHeader,
    CardHunch, Score, HunchInfo, HunchScoreBox,
    Team, HunchScore, TeamName, Status, HunchText,
    ScoreText, Text, Label, Divider, Modal, Flag
} from './styles'

const GameList = ({ data }) => {

    const { local, date } = data.confrontationLocation
    const { initials: homeInitial } = data.teamHome
    const { initials: awayInitial } = data.teamVisiting

    const [homeScore, setHomeScore] = useState(null)
    const [awayScore, setAwayScore] = useState(null)
    const [hunchModal, setHunchModal] = useState(false)

    const handleScore = (home, away) => {
        setHomeScore(home)
        setAwayScore(away)
    }

    const handleOpenHunchModal = () => setHunchModal(true)
    const handleCloseHunchModal = () => setHunchModal(false)

    const dateMatch = format(parseISO(date), "EEE, d 'de' LLL 'às' hh:mm", { locale: pt })

    let stadium = local
    if(stadium.length > 18){
        stadium = stadium.substring(0, 19) + '...'
    }

    return (
        <>
            <Container>
                <Card
                    style={{ elevation: 5 }}
                    onPress={handleOpenHunchModal}
                    activeOpacity={0.8}
                    disabled={data.scoreBoard ? true : false}
                >
                    <CardHeader>
                        <InfoHeader>
                            <Icon name='soccer-field' size={22} color='#072' />
                            <Label>{stadium}</Label>
                        </InfoHeader>

                        <InfoHeader>
                            <Icon name='av-timer' size={22} color='#da1e37' />
                            <Label>{dateMatch}</Label>
                        </InfoHeader>

                    </CardHeader>

                    <Divider />

                    <CardHunch>
                        <Score>
                            {data.scoreBoard &&
                                <>
                                    {(data.pn_home_score > 0 || data.pn_away_score > 0) &&
                                        <ScoreText>{'(' + data.pn_home_score + ')'}</ScoreText>
                                    }
                                    <ScoreText>{data.home_score}</ScoreText>
                                    <Icon name='alpha-x' size={25} color='#da1e37' />
                                    <ScoreText>{data.away_score}</ScoreText>
                                    {(data.pn_home_score > 0 || data.pn_away_score > 0) &&
                                        <ScoreText>{'(' + data.pn_away_score + ')'}</ScoreText>
                                    }
                                </>
                            }
                        </Score>

                        <HunchInfo>
                            <Team>
                                <Flag source={changeFlags(homeInitial)} />
                                <TeamName>{homeInitial}</TeamName>
                            </Team>

                            <HunchScoreBox>

                                <HunchScore>
                                    <HunchText>{homeScore ? homeScore : '__'}</HunchText>
                                </HunchScore>

                                <Icon name='alpha-x' size={50} color='#000' />

                                <HunchScore>
                                    <HunchText>{awayScore ? awayScore : '__'}</HunchText>
                                </HunchScore>

                            </HunchScoreBox>

                            <Team>
                                <Flag source={changeFlags(awayInitial)} />
                                <TeamName>{awayInitial}</TeamName>
                            </Team>

                        </HunchInfo>
                        {data.scoreBoard &&
                            <>
                                <Divider />
                                <Status style={{
                                    backgroundColor: '#da1e37',
                                    borderRadius: 5,
                                }}>
                                    <Text>Encerrado</Text>
                                </Status>
                            </>
                        }

                    </CardHunch>


                </Card>
            </Container>
            <Modal
                visible={hunchModal}
                animationType='slide'
                transparent={true}
            >
                <HunchModal
                    closeModal={handleCloseHunchModal}
                    data={data}
                    handleScore={handleScore}
                    title='Qual o seu palpite?'
                />
            </Modal>
        </>
    );
}

export default GameList