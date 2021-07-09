import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Dimensions, Text } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import api from '../../../../services/api_profile'
import avatar from '../../../../assets/images/avatar.jpg'
import HierarchyModal from '../../../../components/Modals/HierarchyModal'
import { changeLvColor } from '../../../../helpers/data'

import UserRanking from './UserRanking'
import UserHunches from './UserHunches'
import UserJackpot from './UserJackpot'

const initialLayout = { width: Dimensions.get('window').width }

import {
	Container, Header, Image, EditButton, Box, UserName,
	NameAchievement, Modal, LvTitle
} from './styles'

const OtherProfiles = ({ route }) => {

	const { name, id } = route.params?.data?.user

	const [index, setIndex] = useState(0)
	const [routes] = useState([
		{ key: 0, title: 'Ranking' },
		{ key: 1, title: 'Palpites' },
		{ key: 2, title: 'Bolões' }
	])

	const navigation = useNavigation()
	const [profile, setProfile] = useState([])
	const [loading, setLoading] = useState(true)
	const [hierarchyModal, setHierarchyModal] = useState(false)

	useEffect(() => {
		const getProfile = async () => {
			const response = await api.getProfileByID(id)
			setProfile(response.data)
			setLoading(false)
		}
		getProfile()
	}, [])

	const renderTabBar = props => (
		<TabBar {...props}
			renderLabel={({ route }) => (
				<Text style={{
					color: '#022c6f',
					fontSize: 16,
					fontFamily: 'Quantico-Italic'
				}}>
					{route.title}
				</Text>
			)}
			indicatorStyle={{ backgroundColor: '#022c6f' }}
			style={{ backgroundColor: '#fff' }}
		/>
	)

	const renderScene = ({ route }) => {
		switch (route.key) {
			case 0:
				return <UserRanking
					data={profile}
					loading={loading}
				/>
			case 1:
				return <UserHunches
					data={profile}
				/>
			case 2:
				return <UserJackpot />
			default:
				return null;
		}
	}

	const color = changeLvColor(profile?.entryLevel?.level?.valuelevel)

	const openHierarchyModal = () => setHierarchyModal(true)
	const closeHierarchyModal = () => setHierarchyModal(false)

	return (
		<Container>

			<Box>
				<Header>
					<View style={{ alignItems: 'center' }}>
						<Image
							source={avatar}
							resizeMode='cover'
						/>
					</View>
					<EditButton onPress={() => navigation.goBack()}>
						<Icon name='chevron-down' size={30} color='#022c6f' />
					</EditButton>
					<View style={{ alignItems: 'center', marginTop: 25 }}>
						<UserName>{name}</UserName>
						{!loading &&
							<LvTitle color={color} onPress={openHierarchyModal}>
								<NameAchievement>{profile?.entryLevel?.nameLV}</NameAchievement>
							</LvTitle>
						}
					</View>
				</Header>

				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={initialLayout}
					renderTabBar={renderTabBar}
				/>

			</Box>
			<Modal
				visible={hierarchyModal}
				animationType='slide'
				transparent={true}
				onRequestClose={closeHierarchyModal}
			>
				<HierarchyModal
					closeModal={closeHierarchyModal}
					bgColor
				/>
			</Modal>
		</Container>
	)
}

export default OtherProfiles