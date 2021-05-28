import React, { useState, useEffect } from 'react'

import api from '../../../../services/api_championships'
import OfficialJackpotList from '../../../../components/OfficialJackpotList'
import EmptyList from '../../../../components/EmptyList'

import { Container, FlatList } from './styles'

const OfficialJackpot = () => {

    const [championships, setChampionships] = useState([])

    useEffect(() => {
        const loadChampionships = async () => {
            const response = await api.getAllOfficialChampionships()
            setChampionships(response.data)
        }
        loadChampionships()
    }, [])

    return (
        <Container>
            <FlatList
                data={championships}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <OfficialJackpotList data={item} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <EmptyList message='Nenhum bolão disponível!' />
                }
            />
        </Container>
    );
}

export default OfficialJackpot