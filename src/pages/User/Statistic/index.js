import React, { useState, useEffect } from 'react'

import api from '../../../services/api_championships'
import EmptyList from '../../../components/EmptyList'
import ChampionshipsList from '../../../components/ChampionshipsList'
import Header from '../../../components/Header'
import Loading from '../../../components/Loading'

import { Container, FlatList } from './styles'

const Statistic = () => {

	const [championships, setChampionships] = useState([])
	const [loading, setLoading] = useState(true)

	const loadChampionships = async () => {
		const response = await api.getAllOfficialChampionships()
		setChampionships(response.data)
		setLoading(false)
	}

	useEffect(() => {
		loadChampionships()
	}, [])

	return (
		<>
			<Header
				title='Tabelas dos Campeonatos'
			/>

			<Container>
				<FlatList
					data={championships}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ChampionshipsList data={item} />}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={
						<EmptyList message='Nenhum bolão disponível!' />
					}
				/>
				{loading && <Loading />}
			</Container>
		</>
	);
}

export default Statistic