import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api from '../../../../services/api_jackpots'
import { regulations } from '../../../../helpers/regulations'

import Header from '../../../../components/Header'
import EmptyList from '../../../../components/Lists/EmptyList'
import RegulationModal from '../../../../components/Modals/RegulationModal'
import Loading from '../../../../components/Loading'

const Regulation = () => {

    const [jackpots, setJackpots] = useState([])
    const [regulationModal, setRegulationModal] = useState(false)
    const [loading, setLoading] = useState(true)

    const loadJackpots = async () => {
        const response = await api.getAllJackpots()
        setJackpots(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadJackpots()
    }, [])

    const closeRegulationModal = () => setRegulationModal(false)
    const openRegulationModal = () => setRegulationModal(true)

    return (
        <Container>
            <Header
                title='Regulamentos dos Bolões'
                label='Relação dos regulamentos de cada bolão'
            />

            <FlatList
                data={jackpots}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Item>
                        <Card
                            style={{ elevation: 3 }}
                            onPress={openRegulationModal}
                            activeOpacity={0.8}
                        >
                            <Icon name='chevron-right' color={'#292b2c'} size={35} />
                            <Title>{item.name}</Title>
                        </Card>
                    </Item>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <EmptyList message='No momento não há nenhum bolão disponível!' />
                }
            />
            <Modal
                visible={regulationModal}
                transparent={false}
                animationType='slide'
                onRequestClose={closeRegulationModal}
            >
                <RegulationModal
                    closeModal={closeRegulationModal}
                    message={regulations.Eurocopa.text}
                    title={regulations.Eurocopa.title}
                />
            </Modal>
            {loading && <Loading lottie={require('../../../../assets/lotties/loading.json')} />}
        </Container>
    )
}

const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #fff;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #FFF;
padding: 5px 20px;
`;

const Item = styled.View`

`;

export const Card = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #ddd;
    padding: 10px;
    margin: 10px 0;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Modal = styled.Modal`
`;



export default Regulation
