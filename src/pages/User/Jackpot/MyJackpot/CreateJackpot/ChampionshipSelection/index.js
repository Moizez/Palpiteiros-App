import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ChampionshipsList from '../../../../../../components/Lists/ChampionshipsList'
import { championships } from '../../../../../../helpers/data'

import {
	Container, Header, Title, SearchBox, BackButton, FlatList,
	ConfirmButton, SearchInput, BoxIcon
} from './styles'

const ChampionshipSelection = ({ navigation }) => {

	const [search, setSearch] = useState('')
	const [championship, setChampionship] = useState([])

	const loadChampionship = async () => {

	}

	useEffect(() => {
		loadChampionship()
	}, [])

	return (
		<Container>
			<Header>
				<BackButton onPress={() => navigation.goBack()}>
					<Icon name='chevron-left' size={35} color='#FFF' />
				</BackButton>
				<Title>ESCOLHER CAMPEONATO</Title>
			</Header>
			<SearchBox>
				<SearchInput
					placeholder='Pesquisar Campeonato'
					autoCorrect={false}
					autoCapitalize='none'
					value={search}
					onChangeText={(text) => setSearch(text)}
				/>
				<BoxIcon activeOpacity={1}>
					<Icon name='magnify' size={30} color='#909590' />
				</BoxIcon>
			</SearchBox>
			<FlatList
				data={championships}
				keyExtractor={(item) => item.key}
				renderItem={({ item }) => <ChampionshipsList data={item} />}
				showsVerticalScrollIndicator={false}
			/>

			<ConfirmButton>
				<Title style={{ color: '#022c6f' }}>Criar Bolão</Title>
			</ConfirmButton>
		</Container>
	);
}

export default ChampionshipSelection