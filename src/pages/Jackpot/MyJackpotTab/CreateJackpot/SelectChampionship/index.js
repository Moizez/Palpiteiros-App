import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
	Container, Header, Title, SearchBox, BackButton, FlatList, ConfirmButton, SearchInput, BoxIcon
} from './styles'

import ChampionshipsList from '../../../../../components/ChampionshipsList'
import RequestController from '../../../../../controllers/RequestController'

const items = [
	{
		key: String(Math.random()),
		name: 'Copa do Mundo',
		year: 2022,
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qatar_2022_Logo.png/404px-Qatar_2022_Logo.png'
	},
	{
		key: String(Math.random()),
		name: 'Champions League',
		year: 2022,
		image: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/116px-UEFA_Champions_League_logo_2_svg.png',
	},
	{
		key: String(Math.random()),
		name: 'Europa League',
		year: 2022,
		image: 'https://i.pinimg.com/originals/10/b1/d8/10b1d8001463bb24c5372c13b67f8475.png',
	},
	{
		key: String(Math.random()),
		name: 'Copa América',
		year: 2022,
		image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/2019_Copa_Am%C3%A9rica_logo.svg/250px-2019_Copa_Am%C3%A9rica_logo.svg.png',
	},
	{
		key: String(Math.random()),
		name: 'Copa Libertadores',
		year: 2022,
		image: 'https://upload.wikimedia.org/wikipedia/pt/4/4b/Conmebol_Libertadores_Bridgestone_logo.png',
	},
	{
		key: String(Math.random()),
		name: 'Copa do Brasil',
		year: 2022,
		image: 'https://upload.wikimedia.org/wikipedia/pt/e/ea/Copa_Continental_do_Brasil.png',
	}
]

const SelectChampionship = ({ navigation }) => {

	const [search, setSearch] = useState('')
	const [championship, setChampionship] = useState([])

	const loadChampionship = async () => {
		const response = await RequestController.onGet('/api/championships')
		const data = await response.json()
		setChampionship(data)
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
				data={items}
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

export default SelectChampionship