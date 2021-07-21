import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import api from '../../../../../services/api_confrontation'
import EmptyList from '../../../../../components/Lists/EmptyList'
import Loading from '../../../../../components/Loading'
import FinishedGamesList from '../../../../../components/Lists/FinishedGamesList'
import { View, ActivityIndicator } from 'react-native'

const PastGames = ({ idChampionship, idJackpot }) => {

	const [loading, setLoading] = useState(false)
	const [confrontations, setConfrontations] = useState([])
	const [limit, setLimit] = useState(10)

	const loadConfrontationsClosed = async () => {
		setLoading(true)
		const response = await api.getConfrontationsClosedByChampionships(idChampionship, limit)
		setConfrontations(response.data)
		setLimit(limit + 10)
		setLoading(false)
	}

	useEffect(() => {
		loadConfrontationsClosed()
	}, [])

	return (
		<Container>

			<FlatList
				data={confrontations}
				keyExtractor={item => item.id}
				renderItem={({ item }) =>
					<FinishedGamesList
						data={item}
						idJackpot={idJackpot}
					/>
				}
				onResponderEnd={loadConfrontationsClosed}
				onEndReachedThreshold={0.1}
				ListFooterComponent={
					loading ?
						<View style={{ padding: 10 }}>
							<ActivityIndicator size={25} color='#022c6f' />
						</View>
						: null
				}
				showsVerticalScrollIndicator={true}
				ListEmptyComponent={
					<EmptyList message='Não há jogos encerrados!' />
				}
			/>
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

export default PastGames

