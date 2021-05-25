import React, { useContext } from 'react';

import { AuthContext } from '../../../contexts/auth';
import GameList from '../../../components/GameList'

import { Container, Header, FlatList, Title, Label } from './styles'

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
				keyExtractor={(item) => item.campeonato_id}
				renderItem={({ item }) => <GameList data={item} />}
				showsVerticalScrollIndicator={false}
			/>

		</Container>
	);
}

export default Home

