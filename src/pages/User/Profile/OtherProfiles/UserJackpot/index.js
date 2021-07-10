import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api from '../../../../../services/api'

import JackpotModal from '../../../../../components/Modals/JackpotModal'
import Snackbar from '../../../../../components/Snackbar'
import logo from '../../../../../assets/images/logo_euro.png'
import Loading from '../../../../../components/Loading'

const UserJackpot = ({ data, loading }) => {

    const navigation = useNavigation()
    const [jackpotModal, setJackpotModal] = useState(false)
    const [showSnack, setShowSnack] = useState(false)
    const [snackColor, setSnackColor] = useState('')
    const [snackTime, setSnackTime] = useState(null)
    const [message, setMessage] = useState('')
    const [refresh, setRefresh] = useState(false)

    const [jackpotData, setJackpotData] = useState({
        title: '',
        size: 0,
        championshipName: '',
        year: '',
        id: ''
    })

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

    const hasRegister = async (id, jackpotName, size, championshipName, year) => {
        const response = await api.hasRegister(id)
        if (response.data) {
            return navigation.navigate('JackpotDetails', {
                id: id,
                jackpotName: jackpotName
            })
        } else {
            setJackpotData({
                title: jackpotName,
                size: size,
                championshipName: championshipName,
                year: year,
                id: id
            })
            return handleOpenJackpotModal()
        }
    }

    const handleOpenJackpotModal = () => setJackpotModal(true)
    const handleCloseJackpotModal = () => setJackpotModal(false)
    const handleShowSnack = () => setShowSnack(true)
    const handleCloseSnack = () => setShowSnack(false)

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {data?.rankings?.map(jack =>
                    <CardButton
                        key={jack?.id}
                        onPress={
                            () => hasRegister(
                                jack.jackpot?.id,
                                jack.jackpot?.name,
                                jack?.jackpot?.users?.length,
                                jack.jackpot?.championship?.name,
                                jack.jackpot?.championship?.year,
                            )
                        }
                        activeOpacity={0.9}>
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
                                <Title>{jack.jackpot?.name}</Title>
                                <Label>Edição: {jack.jackpot?.championship?.year}</Label>
                            </CardHeader>
                            <UserBox>
                                <Icon name='account-group' size={15} color='#022c6f' />
                                <Label style={{ marginLeft: 5, fontSize: 12 }}>{jack?.jackpot?.users?.length}</Label>
                            </UserBox>
                        </Card>
                    </CardButton>
                )}
            </Container>

            <Modal
                visible={jackpotModal}
                animationType='slide'
                transparent={false}
                onRequestClose={handleCloseJackpotModal}
            >
                <JackpotModal
                    title={jackpotData?.title}
                    closeModal={handleCloseJackpotModal}
                    confirmModal={handleJackpotRegister}
                    totalParticipants={jackpotData?.size}
                    championship={jackpotData?.championshipName}
                    year={jackpotData?.year}
                    id={jackpotData?.id}
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
                    time={snackTime}
                    hasBottom='-40%'
                />
            </Modal>

            {loading &&
                <Loading
                    lottie={require('../../../../../assets/lotties/loading.json')}
                    bgColor='#FFF'
                />
            }
        </>
    )
}

const Container = styled.ScrollView``;

const CardButton = styled.TouchableOpacity``;

const Card = styled(LinearGradient)`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 2px;
`;

const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
`;

const Image = styled.Image`
    width: 35px;
    height: 35px;
`;

const CardHeader = styled.View``;

const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: #000;
`;

const Label = styled.Text`
    font-size: 15px;
`;

const VerticalDivider = styled.View`
    height: 100%;
    width: 0.5px;
    background-color: #000;
    opacity: 0.5;
    margin: 0 10px;
`;

const UserBox = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

const Modal = styled.Modal``;

export default UserJackpot
