import React, { useState, useEffect } from 'react'

import api from '../../../../services/api_jackpots'
import JackpotList from '../../../../components/JackpotList'
import EmptyList from '../../../../components/EmptyList'
import Loading from '../../../../components/Loading'

import { Container, FlatList, RefreshControl } from './styles'

const OfficialJackpot = () => {

    const [jackpots, setJackpots] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(true)

    const loadJackpots = async () => {
        setLoading(true)
        const response = await api.getAllJackpots()
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
        <Container>
            <FlatList
                data={jackpots}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <JackpotList data={item} />}
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
    );
}

export default OfficialJackpot