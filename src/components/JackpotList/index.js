import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import api_ranking from '../../services/api_ranking'

import JackpotModal from '../Modals/JackpotModal'
import Snackbar from '../Snackbar'
import logo from '../../assets/images/logo_euro.png'

import {
    Container, Title, Label, Card, CardHeader, Image, Modal
} from './styles'

const JackpotList = ({ data }) => {

    const navigation = useNavigation()
    const [jackpotModal, setJackpotModal] = useState(false)
    const [jackpotRanking, setJackpotRanking] = useState([])
    const [showSnack, setShowSnack] = useState(false)
    const [snackColor, setSnackColor] = useState('')
    const [snackTime, setSnackTime] = useState(null)
    const [message, setMessage] = useState('')

    const { id, name: jackpotName, championship: { year, name } } = data

    const getJackpotRanking = async () => {
        const response = await api_ranking.getRankingByJackpot(id)
        setJackpotRanking(response.data)
    }

    const totalParticipants = jackpotRanking.length

    const handleJackpotRegister = async () => {
        const response = await api.onJackpotRegister(id)
        if (response.status === 201) {
            handleCloseJackpotModal()
            setMessage('Você ingressou no bolão!')
            setSnackColor('#43aa8b')
            setSnackTime(2000)
            handleShowSnack()
            setTimeout(() => {
                handleShowSnack()
            }, 1000);
        } else {
            setSnackColor('#ad2e24')
            setSnackTime(5000)
            setMessage(`Falha inesperada! Erro: ${response.status}`)
            handleShowSnack()
        }
    }

    const hasRegister = async () => {
        const response = await api.hasRegister(id)
        if (response.data) {
            return navigation.navigate('JackpotDetails', {
                data: jackpotRanking,
                jackpotName: jackpotName
            })
        } else {
            return handleOpenJackpotModal()
        }
    }

    useEffect(() => {
        getJackpotRanking()
    }, [id])

    const handleOpenJackpotModal = () => setJackpotModal(true)
    const handleCloseJackpotModal = () => setJackpotModal(false)
    const handleShowSnack = () => setShowSnack(true)
    const handleCloseSnack = () => setShowSnack(false)

    return (
        <>
            <Container>
                <Card
                    onPress={hasRegister}
                    activeOpacity={0.8}
                >
                    <Image
                        source={logo}
                        resizeMode='contain'
                    />
                    <CardHeader>
                        <Title>{data.name}</Title>
                        <Label>Edição: {year}</Label>
                        <Label>Início: Sex. 11/06 às 16h</Label>
                    </CardHeader>
                </Card>
            </Container>
            <Modal
                visible={jackpotModal}
                animationType='slide'
                transparent={false}
                onRequestClose={handleCloseJackpotModal}
            >
                <JackpotModal
                    title={data.name}
                    closeModal={handleCloseJackpotModal}
                    confirmModal={handleJackpotRegister}
                    totalParticipants={totalParticipants}
                    jackpotName={jackpotName}
                    championship={name}
                    year={year}
                    id={id}
                />
            </Modal>
            <Modal
                visible={showSnack}
                animationType='fade'
                transparent={true}
            >
                <Snackbar
                    message={message}
                    onDismiss={handleCloseSnack}
                    hasBgColor
                    hasColor={snackColor}
                    hasBottom='-40%'
                    time={snackTime}
                />
            </Modal>
        </>
    );
}

export default JackpotList