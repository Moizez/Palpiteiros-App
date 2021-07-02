import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';

import api from '../../../services/api_championships'
import EmptyList from '../../../components/Lists/EmptyList'
import ChampionshipsList from '../../../components/Lists/ChampionshipsList'
import Header from '../../../components/Header'
import Loading from '../../../components/Loading'

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
				{loading && <Loading lottie={require('../../../assets/lotties/soccer-field.json')}/>}
			</Container>
		</>
	);
}

const Container = styled.View`
flex:1;
align-items: center;
justify-content: center;
background-color: #022c6f;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
background-color: #FFF;
border-top-left-radius: 20px;
padding: 10px 20px;
`;

export default Statistic