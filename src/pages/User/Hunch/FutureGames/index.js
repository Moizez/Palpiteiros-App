import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import GameList from '../../../../components/GameList'
import EmptyList from '../../../../components/EmptyList'
import Loading from '../../../../components/Loading'

const FutureGames = () => {

	const [hunchs, setHunchs] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(false)

    const loadHunchs = async () => {
       
    }

    useEffect(() => {
        loadHunchs()
    }, [])

    const handleRefresh = async () => {
        setRefreshing(true)
        await loadHunchs()
        setRefreshing(false)
    }

	return (
		<Container>

			<FlatList
				data={hunchs}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <GameList data={item} />}
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={handleRefresh}
						colors={["gray", "blue"]}
					/>
				}
				ListEmptyComponent={
					<EmptyList message='Nenhum jogo disponível!' />
				}
			/>
			{loading && !refreshing && <Loading />}
		</Container>
	)
}

const Container = styled.View`
flex: 1;
background-color: #022c6f;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #FFF;
`;

const RefreshControl = styled.RefreshControl``;

export default FutureGames

