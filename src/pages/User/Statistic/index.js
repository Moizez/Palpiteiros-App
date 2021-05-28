import React, { useContext, useState, useEffect } from 'react'

import api from '../../../services/api'
import EmptyList from '../../../components/EmptyList'
import ChampionshipsList from '../../../components/ChampionshipsList'

import { Container, Header, FlatList, Title, Label } from './styles'

const Statistic = () => {

	const [championships, setChampionships] = useState([])

	console.log(championships)

	useEffect(() => {
		const loadChampionships = async () => {
			const response = await api.getAllOfficialChampionships()
			setChampionships(response.data)
		}
		loadChampionships()
	}, [])

	return (
		<>
			<Header>
				<Title>Tabela dos Campeonatos</Title>
				<Label>Disponíveis</Label>
			</Header>
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