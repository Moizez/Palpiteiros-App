import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import api from '../../../services/api_jackpots'

import Header from '../../../components/Header'
import MySweepstakesList from '../../../components/Lists/MySweepstakesList'
import EmptyList from '../../../components/Lists/EmptyList'
import Loading from '../../../components/Loading'

const Games = ({ route }) => {

    const [jackpots, setJackpots] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(true)

    const loadJackpots = async () => {
        setLoading(true)
        const response = await api.getJackpotsByUserId()
        setJackpots(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadJackpots()
    }, [route])

    const handleRefresh = async () => {
        setRefreshing(true)
        await loadJackpots()
        setRefreshing(false)
    }

    return (
        <>
            <Header
                title='Bolões Disponíveis'
                label='Selecione um bolão e faça seus palpites!'
            />
            <Container>

                <FlatList
                    data={jackpots}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MySweepstakesList data={item} />}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={["gray", "blue"]}
                        />
                    }
                    ListEmptyComponent={
                        <EmptyList
                            message='No momento não há nenhum bolão disponível!'
                            tip='Dica: Primeiro é necessário participar de um bolão.'
                        />
                    }
                />
                {loading && !refreshing && <Loading lottie={require('../../../assets/lotties/soccer-field.json')} />}
            </Container>
        </>
    );
}

const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #022c6f;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #FFF;
border-top-left-radius: 20px;
padding: 10px 20px;
`;

const RefreshControl = styled.RefreshControl``;


export default Games