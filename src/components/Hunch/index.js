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

const GameHunch = ({ data, idJackpot, isRefresh }) => {

    const [hunch, setHunch] = useState(null)
    const [hunchModal, setHunchModal] = useState(false)

    const getHunch = async () => {
        const response = await api.getOneByConfrontationAndJackpotAndUser(data.id, idJackpot)
        setHunch(response.data)
    }

    useEffect(() => {
        getHunch()
    }, [isRefresh])

    const handleHunch = async (idConfrontation, homeGoals, awayGoals) => {


        if (hunch){
            const response = await api.updateHunchs(hunch.id, idJackpot, idConfrontation, homeGoals, awayGoals)
            if (response.data) {
                alert('Update deu certo!')
            } else {
                alert('Update deu ruim!' + response.status)
            }
            return;
        }

        /*const [exist] = hunchs?.map(i => i.jackpot.id === idJackpot)
         if (hunchs && exist) {
         console.log('aqui')
         const { id: idHunch } = hunchs?.find(i => i.jackpot.id === idJackpot)
         const response = await api.updateHunchs(idHunch, idJackpot, idConfrontation, homeGoals, awayGoals)
         if (response.status === 200) {
         alert('Update deu certo!')
         } else {
         alert('Update deu ruim!' + response.status)
         }
         } */
        const response = await api.createHunchs(idJackpot, idConfrontation, homeGoals, awayGoals)
        if (response.data) {
            alert('Criação deu certo!')
        } else {
            alert('Criação deu ruim!' + response.status)
        }
    }

    const handleOpenHunchModal = () => setHunchModal(true)
    const handleCloseHunchModal = () => setHunchModal(false)

    const dateFormat = (date) => {
        return format(parseISO(date), "d 'de' LLL 'às' hh:mm", { locale: pt })
    }

    const renderScore = () =>{
        return (
            <HunchInfo>
                <Team>
                    <Flag source={changeFlags(data?.teamHome?.initials)} />
                    <TeamName>{data?.teamHome?.initials}</TeamName>
                </Team>
                <HunchScore>
                    <HunchText>
                        {hunch?.resultHunch?.golsHome}
                    </HunchText>
                </HunchScore>
                <Icon name='alpha-x' size={50} color='#000' />
                <HunchScore>
                    <HunchText>
                        {hunch?.resultHunch?.golsVisiting}
                    </HunchText>
                </HunchScore>
                <Team>
                    <Flag source={changeFlags(data?.teamVisiting?.initials)} />
                    <TeamName>{data?.teamVisiting?.initials}</TeamName>
                </Team>
            </HunchInfo>
        )
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
                        {renderScore()}
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
                        hunch={hunch}
                    />
                </Modal>
            </Container>
        </>
    );
}

export default GameHunch
