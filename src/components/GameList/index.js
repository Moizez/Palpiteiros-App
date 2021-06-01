import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HunchModal from '../Modals/HunchModal'

import {
    Container, Card, CardHeader, InfoHeader,
    CardHunch, Score, HunchInfo, HunchScoreBox,
    Team, HunchScore, TeamName, Status, HunchText,
    ScoreText, Text, Label, Divider, Modal
} from './styles'

const GameList = ({ data }) => {

    const [homeScore, setHomeScore] = useState(null)
    const [awayScore, setAwayScore] = useState(null)
    const [hunchModal, setHunchModal] = useState(false)

    const handleScore = (home, away) => {
        setHomeScore(home)
        setAwayScore(away)
    }

    const handleOpenHunchModal = () => setHunchModal(true)
    const handleCloseHunchModal = () => setHunchModal(false)

    return (
        <>
            <Container style={{ elevation: 5 }}>
                <Card
                    onPress={handleOpenHunchModal}
                    activeOpacity={0.8}
                    disabled={data.status === 'Encerrado' && true}
                >
                    <CardHeader>
                        <InfoHeader>
                            <Icon name='soccer-field' size={22} color='#072' />
                            <Label>{data.stadium}</Label>
                        </InfoHeader>

                        <InfoHeader>
                            <Icon name='av-timer' size={22} color='#da1e37' />
                            <Label>{data.date}</Label>
                        </InfoHeader>

                    </CardHeader>

                    <Divider />

                    <CardHunch>
                        <Score>
                            {data.status == 'Encerrado' &&
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
                                {data.flag_home}
                                <TeamName>{data.team_home}</TeamName>
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
                                {data.flag_away}
                                <TeamName>{data.team_away}</TeamName>
                            </Team>

                        </HunchInfo>

                        <Divider />

                        <Status style={{
                            backgroundColor: data.status == 'Encerrado' ? '#da1e37' : '#072',
                            borderRadius: 5,
                        }}>
                            <Text>{data.status}</Text>
                        </Status>

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