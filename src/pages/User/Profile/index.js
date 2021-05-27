import React, { useContext } from 'react'

import { AuthContext } from '../../../contexts/auth'
import avatar from '../../../assets/images/avatar.jpg'

import {
	Container, Header, Image, InfoBox, GroupItem, InfoItem,
	Title, Line, ScoreBox, Label, Box, UserName
} from './styles'

const Profile = () => {

	const { user } = useContext(AuthContext)

	return (
		<Container>
			<Header>
				<Image
					source={avatar}
					resizeMode='cover'
				/>
				<UserName>{user?.name}</UserName>
			</Header>

			<Box>
				<ScoreBox>
					<Title style={{ fontSize: 70, fontWeight: 'bold' }}>15</Title>
					<Label>LEVEL</Label>
				</ScoreBox>

				<Line />

				<InfoBox>
					<GroupItem>
						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>60</Title>
							<Label>PALPITES</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>230</Title>
							<Label>PONTOS</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>5</Title>
							<Label>AMIGOS</Label>
						</InfoItem>
					</GroupItem>

					<GroupItem>
						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>2</Title>
							<Label>BOLÕES</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>56%</Title>
							<Label>PRECISÃO</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>13</Title>
							<Label>ACERTOS</Label>
						</InfoItem>
					</GroupItem>
				</InfoBox>

			</Box>
		</Container>
	)
}

export default Profile