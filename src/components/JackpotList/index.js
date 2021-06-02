import React, { useState } from 'react'

import api from '../../services/api'

import JackpotModal from '../Modals/JackpotModal'
import logo from '../../assets/images/logo_euro.png'

import {
    Container, Title, Label, Card, CardHeader, Image, Modal
} from './styles'

const JackpotList = ({ data }) => {

    const [jackpotModal, setJackpotModal] = useState(false)
    const { id, name: jackpotName, championship: { year, name } } = data

    const handleJackpotRegister = async () => {
        const response = await api.onJackpotRegister(id)
        alert(response.status)
    }

    const handleOpenJackpotModal = () => setJackpotModal(true)
    const handleCloseJackpotModal = () => setJackpotModal(false)

    return (
        <>
            <Container>
                <Card
                    onPress={handleOpenJackpotModal}
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
            >
                <JackpotModal
                    title={data.name}
                    closeModal={handleCloseJackpotModal}
                    confirmModal={handleJackpotRegister}
                    jackpotName={jackpotName}
                    championship={name}
                    year={year}
                    id={id}
                />
            </Modal>
        </>
    );
}

export default JackpotList