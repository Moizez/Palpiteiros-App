import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import api from '../../../../services/api_jackpots'

import JackpotList from '../../../../components/JackpotList'
import EmptyList from '../../../../components/EmptyList'
import Loading from '../../../../components/Loading'

import {
    Container, Title, Label, FlatList, CreateJackpot,
    BoxLabel, CircleButton, RefreshControl
} from './styles'

const MyJackpot = () => {

    const navigation = useNavigation()
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
            <CreateJackpot onPress={() => navigation.navigate('CreateJackpot')} activeOpacity={1}>
                <BoxLabel>
                    <CircleButton>
                        <Title style={{ fontSize: 22, color: '#FFF' }}>+</Title>
                    </CircleButton>
                    <Label>
                        Crie seu bolão, junte seus amigos e veja quem tem mais sorte!
                        </Label>
                </BoxLabel>
            </CreateJackpot>
            {loading && !refreshing && <Loading />}
        </Container>
    );
}

export default MyJackpot