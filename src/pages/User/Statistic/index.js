import React, { useState, useEffect } from 'react'

import api from '../../../services/api_championships'
import EmptyList from '../../../components/EmptyList'
import ChampionshipsList from '../../../components/ChampionshipsList'
import Header from '../../../components/Header'

import { Container, FlatList } from './styles'

const Statistic = () => {

	const [championships, setChampionships] = useState([])

	useEffect(() => {
		const loadChampionships = async () => {
			const response = await api.getAllOfficialChampionships()
			setChampionships(response.data)
		}
		loadChampionships()
	}, [])

	return (
		<>
			<Header
				title='Tabela dos Campeonatos'
				label='Disponíveis'
			/>

			<Container>
				<FlatList
					data={championships}
					keyExtractor={(item) => item.key}
					renderItem={({ item }) => <ChampionshipsList data={item} />}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={
						<EmptyList message='Nenhum bolão disponível!' />
					}
				/>
			</Container>
		</>
	);
}

export default Statistic