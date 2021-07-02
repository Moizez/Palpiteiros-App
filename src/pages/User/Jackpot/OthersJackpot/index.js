import React, { useState } from 'react'

import JackpotList from '../../../../components/Lists/JackpotList'
import EmptyList from '../../../../components/Lists/EmptyList'
import Loading from '../../../../components/Loading'

import { Container, FlatList, RefreshControl } from './styles'

const OthersJackpot = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRefresh = async () => {
        setRefreshing(true)
        await loadJackpots()
        setRefreshing(false)
    }

    return (
        <Container>
            <FlatList
                data={null}
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
            {loading && !refreshing && <Loading lottie={require('../../../../assets/lotties/soccer-field.json')}/>}
        </Container>
    );
}

export default OthersJackpot