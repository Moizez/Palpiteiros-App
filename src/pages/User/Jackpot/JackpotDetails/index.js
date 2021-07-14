import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DataTable } from 'react-native-paper'
import styled from 'styled-components/native'

import api_ranking from '../../../../services/api_ranking'

import JackpotRankingList from '../../../../components/Lists/JackpotRankingList'
import Header from '../../../../components/Header'
import EmptyList from '../../../../components/Lists/EmptyList'
import PodiumModal from '../../../../components/Modals/PodiumModal'
import Loading from '../../../../components/Loading'

const JackpotDetails = ({ route }) => {

    const { id, jackpotName, finished } = route.params
    const [refreshing, setRefreshing] = useState(false)
    const [jackpotRanking, setJackpotRanking] = useState([])
    const [podium, setPodium] = useState(false)

    const [loading, setLoading] = useState(true)

    const getJackpotRanking = async () => {
        const response = await api_ranking.getRankingByJackpot(id)
        setJackpotRanking(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getJackpotRanking()
    }, [id])

    useEffect(() => {
        const checkFireworks = async () => {
            const value = await AsyncStorage.getItem('@palpiteiros:fireworks')
            if (finished && !value) {
                await AsyncStorage.setItem('@palpiteiros:fireworks', 'fireworks')
                showPodium()
            }
        }
        checkFireworks()
    }, [])

    const handleRefresh = async () => {
        setRefreshing(true)
        await getJackpotRanking()
        setRefreshing(false)
    }

    const showPodium = () => setPodium(true)
    const closePodium = () => setPodium(false)

    return (
        <Container>

            <Header
                title={jackpotName}
                showPodium={showPodium}
                finished={finished}
                hasIcon
                hasIcon2
            />

            <TitleBox>
                <Title>Classificação</Title>
            </TitleBox>

            <DataTable>
                <DataTable.Header style={{ backgroundColor: '#ccc' }}>
                    <DataTable.Title><Text>Nº</Text></DataTable.Title>
                    <DataTable.Title style={{ flex: 3 }}><Text>Nome</Text></DataTable.Title>
                    <DataTable.Title numeric><Text></Text></DataTable.Title>
                    <DataTable.Title numeric><Text>Pt</Text></DataTable.Title>
                    <DataTable.Title numeric><Text>Ex</Text></DataTable.Title>
                    <DataTable.Title numeric><Text>VE</Text></DataTable.Title>
                </DataTable.Header>
            </DataTable>

            <FlatList
                data={jackpotRanking}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <JackpotRankingList data={item} index={index} />}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={["gray", "blue"]}
                    />
                }
                ListEmptyComponent={
                    <EmptyList message='Nenhum participante nesse bolão' />
                }
            />

            {!loading &&
                <Modal
                    visible={podium}
                    animationType='fade'
                    transparent={true}
                    onRequestClose={closePodium}
                >
                    <PodiumModal
                        closeModal={closePodium}
                        data={jackpotRanking}
                    />
                </Modal>
            }

            {loading && <Loading lottie={require('../../../../assets/lotties/soccer-field.json')} />}
        </Container>
    );
}

const Container = styled.View`
flex:1;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
margin-bottom: 10px;
`;

const TitleBox = styled.View`
    align-items: center;
    justify-content: center;
    background-color: #1d4e89;
    padding: 8px;
`;

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
`;

const Text = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
`;

const RefreshControl = styled.RefreshControl``;
const Modal = styled.Modal``;

export default JackpotDetails