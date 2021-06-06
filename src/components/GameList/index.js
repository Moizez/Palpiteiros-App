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

const GameList = ({ data, idChampionship, idJackpot }) => {

    const [hunchs, setHunchs] = useState([])
    const [hunchModal, setHunchModal] = useState(false)

    const getHunchs = async () => {
        const response = await api.getHunchByChampionshipAndUser(idChampionship)
        setHunchs(response.data)
    }

    useEffect(() => {
        getHunchs()
    }, [])

    const handleHunch = async (idConfrontation, homeGoals, awayGoals) => {

        if (hunchs) {
            const [exist] = hunchs?.map(i => i.jackpot.id === idJackpot)
            if (exist) {
                const { idHunch } = hunchs?.find(i => i.jackpot.id === idJackpot)
                const response = await api.updateHunchs(idHunch, idJackpot, idConfrontation, homeGoals, awayGoals)
                if (response.data) {
                    alert('Atualizar deu certo!')
                } else {
                    alert('Atualizar deu ruim!' + response.status)
                }
            }
        } else {
            const response = api.createHunchs(idJackpot, idConfrontation, homeGoals, awayGoals)
            if (response.data) {
                alert('Criar deu certo!')
            } else {
                alert('Criar deu ruim!' + response.status)
            }
        }
    }



    const handleOpenHunchModal = () => setHunchModal(true)
    const handleCloseHunchModal = () => setHunchModal(false)

    const dateFormat = (date) => {
        return format(parseISO(date), "d 'de' LLL 'às' hh:mm", { locale: pt })
    }

    return (
        <>
            <Container>
                <Card
                    style={{ elevation: 5 }}
                    onPress={handleOpenHunchModal}
                    activeOpacity={0.8}
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

                            {hunchs[0]?.confrontation?.map((hint) =>
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

                        {data.scoreBoard &&
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
                <Modal
                    visible={hunchModal}
                    animationType='slide'
                    transparent={true}
                >
                    <HunchModal
                        closeModal={handleCloseHunchModal}
                        handleHunch={handleHunch}
                        data={data}
                    />
                </Modal>
            </Container>
        </>
    );
}

export default GameList