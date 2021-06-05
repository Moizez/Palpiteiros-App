import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import api from '../../services/api_hunchs'
import HunchModal from '../Modals/HunchModal'
import { changeFlags } from '../../helpers/data'

import {
    Container, Card, CardHeader, InfoHeader,
    CardHunch, Score, HunchInfo, HunchScoreBox,
    Team, HunchScore, TeamName, Status, HunchText,
    ScoreText, Text, Label, Divider, Modal, Flag
} from './styles'

const GameList = ({ data }) => {

    const [hunchs, setHunchs] = useState([])
    const [hunchModal, setHunchModal] = useState(false)
    const [dataMatch, setDataMatch] = useState([])

    const { id: idData } = data
    const { id, confrontations } = data.championship

    const getHunchs = async () => {
        const response = await api.getHunchByChampionshipAndUser(id)
        setHunchs(response.data)
    }

    const handleHunch = async (confrontationId, homeGoals, awayGoals) => {
        const response = api.onHunchs(confrontationId, homeGoals, awayGoals, idData)
        if (response.data) {
            alert('Deu certo!')
        } else {
            alert('Deu ruim!' + response.status)
        }
    }

    useEffect(() => {
        getHunchs()
    }, [])

    const handleOpenHunchModal = () => setHunchModal(true)
    const handleCloseHunchModal = () => setHunchModal(false)

    //Testar filtro no Modal depois
    const filterConfrontations = (id) => {
        const result = confrontations.filter(i => i.id == id)
        setDataMatch(result)
    }

    const dateFormat = (date) => {
        return format(parseISO(date), "d 'de' LLL 'às' hh:mm", { locale: pt })
    }

    return (
        <>
            <Container>
                {confrontations.map(match =>
                    <Card
                        key={match.id}
                        style={{ elevation: 5 }}
                        onPress={() => {
                            handleOpenHunchModal()
                            filterConfrontations(match.id)
                        }}
                        activeOpacity={0.8}
                    >
                        <CardHeader>
                            <InfoHeader>
                                <Icon name='soccer-field' size={22} color='#072' />
                                <Label>{match.confrontationLocation?.local}</Label>
                            </InfoHeader>

                            <InfoHeader>
                                <Icon name='av-timer' size={22} color='#da1e37' />
                                <Label>{dateFormat(match.confrontationLocation?.date)}</Label>
                            </InfoHeader>

                        </CardHeader>

                        <Divider />

                        <CardHunch>

                            <HunchInfo>
                                <Team>
                                    <Flag source={changeFlags(match?.teamHome?.initials)} />
                                    <TeamName>{match?.teamHome?.initials}</TeamName>
                                </Team>

                                {hunchs?.map((hint) =>
                                    <HunchScoreBox key={hint.id}>

                                        <HunchScore>
                                            <HunchText>
                                                {hint.resultHunch?.golsHome}
                                            </HunchText>
                                        </HunchScore>

                                        <Icon name='alpha-x' size={50} color='#000' />

                                        <HunchScore>
                                            <HunchText>
                                                {hint.resultHunch?.golsVisiting}
                                            </HunchText>
                                        </HunchScore>

                                    </HunchScoreBox>

                                )}

                                <Team>
                                    <Flag source={changeFlags(match?.teamVisiting?.initials)} />
                                    <TeamName>{match?.teamVisiting?.initials}</TeamName>
                                </Team>

                            </HunchInfo>

                            <Score>
                                {match.scoreBoard &&
                                    <>
                                        <ScoreText>{match.scoreBoard?.golsHome}</ScoreText>
                                        <Icon name='alpha-x' size={25} color='#da1e37' />
                                        <ScoreText>{match.scoreBoard?.golsVisiting}</ScoreText>
                                    </>
                                }
                            </Score>

                            {match.scoreBoard &&
                                <>
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
                )}

                <Modal
                    visible={hunchModal}
                    animationType='slide'
                    transparent={true}
                >
                    <HunchModal
                        closeModal={handleCloseHunchModal}
                        title='Qual o seu palpite?'
                        handleHunch={handleHunch}
                        data={dataMatch}
                    />
                </Modal>
            </Container>
        </>
    );
}

export default GameList