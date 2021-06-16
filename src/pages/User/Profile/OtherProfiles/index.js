import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ProgressCircle from 'react-native-progress-circle'

import api from '../../../../services/api_profile'
import avatar from '../../../../assets/images/avatar.jpg'
import Loading from '../../../../components/Loading'

import {
	Container, Header, Image, InfoBox, EditButton,
	Divider, LvBox, Label, Box, UserName, Text,
	AttributeBox, Attribute, LvInfo, Lv, AttributeText,
	AttributeLabel

} from './styles'

const OtherProfiles = ({ route }) => {

	const { name, id } = route.params?.data?.user

	const navigation = useNavigation()
	const [profile, setProfile] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getProfile = async () => {
			const response = await api.getProfileByID(id)
			setProfile(response.data)
			setLoading(false)
		}
		getProfile()
	}, [])

	const colors = ['#ddd', '#f5f3f4']
	const percent = profile?.entryLevel?.level?.percent

	return (
		<>
			<Container>

				<Box style={{ elevation: 3 }}>
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
							<TouchableOpacity>
								<Text>Aprendiz de palpiteiro</Text>
							</TouchableOpacity>
						</View>
					</Header>

					<Divider />

					<InfoBox>
						<LvBox>
							<LvInfo>
								{percent ?
									<ProgressCircle
										percent={percent}
										radius={70}
										borderWidth={3}
										color="#3399FF"
										shadowColor="#ddd"
										bgColor="#fff"
										containerStyle={{ alignItems: 'center', justifyContent: 'center' }}
									>
										<Lv size={profile?.entryLevel?.level?.valuelevel}>
											{profile?.entryLevel?.level?.valuelevel}
											<Lv style={{ fontSize: 20 }}>lv</Lv></Lv>
										<Label>
											{profile?.entryLevel?.level?.valueCurrent}/
											{profile?.entryLevel?.level?.valueLimit}
										</Label>
									</ProgressCircle>
									: null
								}
							</LvInfo>

						</LvBox>

						{profile?.rankings?.map(rank =>
							<AttributeBox key={rank.id}>
								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{profile?.hunches?.length}</AttributeText>
									<AttributeLabel>total de palpite{profile?.hunches?.length > 1 && 's'}</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{rank?.totalAccuracy}</AttributeText>
									<AttributeLabel>{
										rank?.totalAccuracy > 1
											? 'palpites exatos'
											: 'palpite exato'
									}
									</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{rank?.totalHits}</AttributeText>
									<AttributeLabel>{
										rank?.totalHits > 1
											? 'vitórias/empates'
											: 'vitória/empate'
									}
									</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{rank?.totalPoints}</AttributeText>
									<AttributeLabel>total de ponto{rank?.totalPoints > 1 && 's'}</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>
										{profile?.percent}
										<AttributeText style={{ fontSize: 12 }}>
											%
										</AttributeText>
									</AttributeText>
									<AttributeLabel>precisão de acertos</AttributeLabel>
								</Attribute>

								<Attribute style={styles.attribute} colors={colors}>
									<AttributeText>{profile?.totalJackpots}</AttributeText>
									<AttributeLabel>total de bol{
										profile?.totalJackpots > 1
											? 'ões'
											: 'ão'
									}
									</AttributeLabel>
								</Attribute>

							</AttributeBox>
						)}
					</InfoBox>
				</Box>
			</Container>
			{loading && <Loading lottie={require('../../../../assets/lotties/soccer-field.json')} />}
		</>
	)
}

const styles = StyleSheet.create({
	attribute: {
		elevation: 3
	}
})

export default OtherProfiles