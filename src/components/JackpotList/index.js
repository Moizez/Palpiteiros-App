import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api from '../../services/api'

import JackpotModal from '../Modals/JackpotModal'
import Snackbar from '../Snackbar'
import logo from '../../assets/images/logo_euro.png'

import {
    Container, Title, Label, Card, CardHeader, Image,
    Modal, VerticalDivider, UserBox, ImageBox
} from './styles'

const JackpotList = ({ data }) => {

    const navigation = useNavigation()
    const [jackpotModal, setJackpotModal] = useState(false)
    const [showSnack, setShowSnack] = useState(false)
    const [snackColor, setSnackColor] = useState('')
    const [snackTime, setSnackTime] = useState(null)
    const [message, setMessage] = useState('')
    const [refresh, setRefresh] = useState(false)

    const { id, name: jackpotName, championship: { confrontations, year, name } } = data
    const totalParticipants = data.users?.length

    const handleJackpotRegister = async () => {
        const response = await api.onJackpotRegister(id)
        if (response.status === 201) {
            handleCloseJackpotModal()
            setMessage('Você ingressou no bolão!')
            setSnackColor('#43aa8b')
            setSnackTime(2000)
            handleShowSnack()
            setRefresh(!refresh)
            setTimeout(() => {
                navigation.navigate('Games', { refresh: refresh })
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
                id: id,
                jackpotName: jackpotName
            })
        } else {
            return handleOpenJackpotModal()
        }
    }

    const handleOpenJackpotModal = () => setJackpotModal(true)
    const handleCloseJackpotModal = () => setJackpotModal(false)
    const handleShowSnack = () => setShowSnack(true)
    const handleCloseSnack = () => setShowSnack(false)

    return (
        <>
            <Container
            activeOpacity={0.9}
            onPress={hasRegister}
            >
                <Card
                   style={{ elevation: 3 }}
                   colors={['#ddd', '#fff']}
                >
                    <ImageBox>
                        <Image
                            source={logo}
                            resizeMode='contain'
                        />
                    </ImageBox>

                    <VerticalDivider />

                    <CardHeader>
                        <Title>{data.name}</Title>
                        <Label>Edição: {year}</Label>
                        <Label>Início: 11/06/21</Label>
                        <Label>Nº de confrontos: {confrontations?.length}</Label>
                        <Label>Criado por: Palpiteiros</Label>
                    </CardHeader>
                    <UserBox>
                        <Icon name='account-group' size={20} color='#022c6f' />
                        <Label style={{ marginLeft: 10 }}>{data?.users.length}</Label>
                    </UserBox>
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