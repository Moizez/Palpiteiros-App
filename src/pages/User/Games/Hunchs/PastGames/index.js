import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import api from '../../../../../services/api_confrontation'
import EmptyList from '../../../../../components/Lists/EmptyList'
import Loading from '../../../../../components/Loading'
import FinishedGamesList from '../../../../../components/Lists/FinishedGamesList'

const PastGames = ({ idChampionship, idJackpot }) => {

	const [refreshing, setRefreshing] = useState(false)
	const [loading, setLoading] = useState(true)
	const [confrontations, setConfrontations] = useState([])

	const loadConfrontationsClosed = async () => {
		const response = await api.getConfrontationsClosedByChampionships(idChampionship, 51)
		setConfrontations(response.data)
		setLoading(false)
	}

	useEffect(() => {
		loadConfrontationsClosed()
	}, [])

	const handleRefresh = async () => {
		setRefreshing(true)
		await loadConfrontationsClosed()
		setRefreshing(false)
	}

	return (
		<Container>

			<FlatList
				data={confrontations}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) =>
					<FinishedGamesList
						isRefresh={refreshing}
						data={item}
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
					<EmptyList message='Não há jogos encerrados!' />
				}
			/>
			{loading && <Loading lottie={require('../../../../../assets/lotties/soccer-field.json')}/>}
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

export default PastGames

