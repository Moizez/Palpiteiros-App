import React from 'react'
import styled from 'styled-components/native'

import GameList from '../../../../components/GameList'
import { games } from '../../../../helpers/data'

const GamesToday = () => {

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
padding: 10px 15px;
`;

const FlatList = styled.FlatList`
flex: 1;
width: 100%;
`;

export default GamesToday

