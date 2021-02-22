import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import GameList from '../../components/GameList'

import { Container, Header, FlatList, Title, Label } from './styles'

const items = [
	{
		key: String(Math.random()),
		name: 'Vasco',
		image: '',
		score: 2,
		date: new Date()
	},
	{
		key: String(Math.random()),
		name: 'Internacional',
		image: '',
		score: 1,
		date: new Date()
	},
	{
		key: String(Math.random()),
		name: 'Flamengo',
		image: '',
		score: 0,
		date: new Date()
	},
	{
		key: String(Math.random()),
		name: 'São Paulo',
		image: '',
		score: 3,
		date: new Date()
	},
	{
		key: String(Math.random()),
		name: 'Santos',
		image: '',
		score: 5,
		date: new Date()
	},
	{
		key: String(Math.random()),
		name: 'Corinthians',
		image: '',
		score: 2,
		date: new Date()
	},
]

const Home = () => {

	const { championships } = useContext(AuthContext);

	return (
		<Container>

			<Header>
				<Title>CAMPEONATOS</Title>
				<Label>Disponíveis</Label>
			</Header>
			<FlatList
				data={championships}
				keyExtractor={(item) => item.key}
				renderItem={({ item }) => <GameList data={item} />}
				showsVerticalScrollIndicator={false}
			/>

		</Container>
	);
}

export default Home

