import React, {useContext, useEffect, useState} from 'react';

import { AuthContext } from '../../../contexts/auth'
import avatar from '../../../assets/images/avatar.jpg'

import {
	Container, Header, Image, InfoBox, GroupItem, InfoItem,
	Title, Line, ScoreBox, Label, Box, UserName
} from './styles'

const Profile = () => {
	const [pre, setPre] = useState(0.0)
	const { user, handleHunchs, hunchs, ranking, lenJackpots } = useContext(AuthContext)

	useEffect(()=>{
		handleHunchs();
		const roleOfTree = ()=> {
			const totalHunchs = hunchs?.length
			const max = 100
			const x = (ranking?.totalAccuracy * max) / totalHunchs;
			if (x > 0){
				setPre(x.toFixed(0))
			}
		}
		roleOfTree();
	}, [])

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
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>{hunchs?.length}</Title>
							<Label>PALPITES</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>{ranking?.totalPoints}</Title>
							<Label>PONTOS</Label>
						</InfoItem>

						{/*<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>5</Title>
							<Label>AMIGOS</Label>
						</InfoItem>*/}
					</GroupItem>

					<GroupItem>
						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>{lenJackpots}</Title>
							<Label>BOLÕES</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>{pre}%</Title>
							<Label>PRECISÃO</Label>
						</InfoItem>

						<InfoItem>
							<Title style={{ fontSize: 25, fontWeight: 'bold' }}>{ranking?.totalAccuracy}</Title>
							<Label>ACERTOS</Label>
						</InfoItem>
					</GroupItem>
				</InfoBox>

			</Box>
		</Container>
	)
}

export default Profile
