import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import api from '../../../../../services/api_confrontation'

import GameList from '../../../../../components/GameList'
import EmptyList from '../../../../../components/EmptyList'
import Loading from '../../../../../components/Loading'

const GamesToday = ({ idChampionship, idJackpot }) => {

	const [refreshing, setRefreshing] = useState(false)
	const [loading, setLoading] = useState(true)
	const [confrontations, setConfrontations] = useState([])

	const loadConfrontations = async () => {
		const response = await api.getAllConfrontationByChampionships(idChampionship)
		setConfrontations(response.data)
		setLoading(false)
	}

	useEffect(() => {
		loadConfrontations()
	}, [])

	const handleRefresh = async () => {
		setRefreshing(true)
		await loadConfrontations()
		setRefreshing(false)
	}

	return (
		<Container>

			<FlatList
				data={confrontations}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) =>
					<GameList
						data={item}
						idChampionship={idChampionship}
						idJackpot={idJackpot}
					/>
				}
				showsVerticalScrollIndicator={false}
				removeClippedSubviews
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
			{loading && <Loading />}
		</Container>
	)
}

const Container = styled.View`
flex: 1;
background-color: #FFF;
padding: 5px 10px 15px 10px;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #FFF;
`;

const RefreshControl = styled.RefreshControl``;

export default GamesToday

