import React, { useContext, useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProgressCircle from 'react-native-progress-circle'

import { AuthContext } from '../../../contexts/auth'
import api from '../../../services/api_profile'
import avatar from '../../../assets/images/avatar.jpg'

import {
	Container, Header, Image, InfoBox, EditButton,
	Divider, LvBox, Label, Box, UserName, Text,
	AttributeBox, Attribute

} from './styles'

const Profile = () => {

	const { user } = useContext(AuthContext)
	const [profile, setProfile] = useState([])

	useEffect(() => {
		const getProfile = async () => {
			const response = await api.getProfileByID(user.id)
			setProfile(response.data)
		}
		getProfile()
	}, [])

	const colors = ['#ddd', '#f5f3f4']

	return (
		<Container>

			<Box style={{ elevation: 3 }}>
				<Header>
					<View style={{ alignItems: 'center' }}>
						<Image
							source={avatar}
							resizeMode='cover'
						/>
					</View>
					<EditButton>
						<Icon name='account-edit' size={25} color='#022c6f' />
					</EditButton>
					<View style={{ alignItems: 'center', marginTop: 25 }}>
						<UserName>{user?.name}</UserName>
						<TouchableOpacity>
							<Text>Aprendiz de palpiteiro</Text>
						</TouchableOpacity>
					</View>
				</Header>

				<Divider />

				<InfoBox>
					<LvBox>

					</LvBox>

					<AttributeBox>
						<Attribute style={styles.attribute} colors={colors}>

						</Attribute>

						<Attribute style={styles.attribute} colors={colors}>

						</Attribute>

						<Attribute style={styles.attribute} colors={colors}>

						</Attribute>

						<Attribute style={styles.attribute} colors={colors}>

						</Attribute>

						<Attribute style={styles.attribute} colors={colors}>

						</Attribute>

						<Attribute style={styles.attribute} colors={colors}>

						</Attribute>

					</AttributeBox>
				</InfoBox>
			</Box>
		</Container>
	)
}

const styles = StyleSheet.create({
	attribute: {
		elevation: 3
	}
})


export default Profile

/*

	{profile?.rankings?.map(rank =>
					<InfoBox key={rank.id}>
						<GroupItem>
							<InfoItem>
								<Text>{profile.hunches?.length}</Text>
								<Label>palpite{profile.hunches?.length > 1 && 's'}</Label>
							</InfoItem>

							<InfoItem>
								<Text>{rank?.totalPoints}</Text>
								<Label>ponto{rank?.totalPoints > 1 && 's'}</Label>
							</InfoItem>

							<InfoItem>
								<Text>{rank?.totalHits}</Text>
								<Label>VITORIOSO</Label>
							</InfoItem>

						</GroupItem>

						<GroupItem>
							<InfoItem>
								<Text>{profile.totalJackpots}</Text>
								<Label>{profile.totalJackpots > 1 ? 'bolões' : 'bolão'}</Label>
							</InfoItem>

							<InfoItem>
								<Text>{profile.percent}%</Text>
								<Label>PRECISÃO</Label>
							</InfoItem>

							<InfoItem>
								<Text>{rank?.totalAccuracy}</Text>
								<Label>acerto{rank?.totalAccuracy > 1 && 's'}</Label>
							</InfoItem>
						</GroupItem>
					</InfoBox>
				)}


<ProgressCircle
					percent={30}
					radius={50}
					borderWidth={8}
					color="#3399FF"
					shadowColor="#999"
					bgColor="#fff"
				>
					<Text style={{ fontSize: 18 }}>{'30%'}</Text>
				</ProgressCircle>


*/
