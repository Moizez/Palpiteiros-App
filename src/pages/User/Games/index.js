import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import api from '../../../services/api_jackpots'

import Header from '../../../components/Header'
import MyJackpotList from '../../../components/MyJackpotList'
import EmptyList from '../../../components/EmptyList'
import Loading from '../../../components/Loading'

const Games = () => {

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
    }, [])

    const handleRefresh = async () => {
        setRefreshing(true)
        await loadJackpots()
        setRefreshing(false)
    }

    return (
        <>
            <Header
                title='Lista de Jogos'
            />
            <Container>

                <FlatList
                    data={jackpots}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MyJackpotList data={item} />}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={["gray", "blue"]}
                        />
                    }
                    ListEmptyComponent={
                        <EmptyList message='Nenhum bolão disponível!' />
                    }
                />
                {loading && !refreshing && <Loading />}
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