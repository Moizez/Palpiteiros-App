import React from 'react'
import styled from 'styled-components/native';

import Header from '../../../../components/Header'
import GameList from '../../../../components/GameList'
import { games } from '../../../../helpers/data'

const FutureGames = () => {

	return (
		<Container>

			<FlatList
				data={games}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <GameList data={item} />}
				showsVerticalScrollIndicator={false}
			/>

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
`;

export default FutureGames

