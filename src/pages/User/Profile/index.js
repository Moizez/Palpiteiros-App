import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../../contexts/auth'
import api_hunchs from '../../../services/api_hunchs'
import api_ranking from '../../../services/api_ranking'
import api_jackpots from '../../../services/api_jackpots'
import avatar from '../../../assets/images/avatar.jpg'

import {
	Container, Header, Image, InfoBox, GroupItem, InfoItem,
	Title, Line, ScoreBox, Label, Box, UserName, Text
} from './styles'

const Profile = () => {

	const [hunchs, setHunchs] = useState([])
	const [ranking, setRanking] = useState([])
	const [jackpots, setJackpots] = useState([])
	const { user } = useContext(AuthContext)

	const getHunchs = async () => {
		const data = await api_hunchs.getAllHunchsById(user.id)
		setHunchs(data)
	}

	const getRanks = async () => {
		const data = await api_ranking.getRankingByUser(user.id)
		setRanking(data)
	}

	const getJackpots = async () => {
		const data = await api_jackpots.getJackpotsByUserIdOfLength(user.id)
		setJackpots(data)
	}

	const roleOfTree = () => {
		const totalHunchs = hunchs?.length
		const x = (ranking?.totalAccuracy * 100) / totalHunchs
		if (x >= 0) return x.toFixed(0)
	}
	const percent = roleOfTree()

	const generateLevel = () => {
		const hunchEq = (hunchs?.length > 0 ? hunchs?.length : 0) / 50
		const ptsEq = (ranking?.totalPoints > 0 ? ranking?.totalPoints : 0) / 5
		const hitEq = (ranking?.totalAccuracy > 0 && ranking?.totalAccuracy <= 50)
			? ranking?.totalAccuracy
			: ranking?.totalAccuracy > 0 ? ranking?.totalAccuracy / 10 : 0
		const jackpotEq = (jackpots > 0 ? jackpots : 0) / 10
		const result = hunchEq + ptsEq + hitEq + jackpotEq
		return Math.round(result)
	}
	const level = generateLevel()

	useEffect(() => {
		getHunchs()
		getRanks()
		getJackpots()
		roleOfTree()
		generateLevel()
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
					<Title style={{ fontSize: 70, fontWeight: 'bold' }}>{level > 0 ? level : 0}</Title>
					<Label style={{ color: '#022c6f' }}>Lv</Label>
				</ScoreBox>

				<Line />

				<InfoBox>
					<GroupItem>
						<InfoItem>
							<Text>{hunchs?.length > 0 ? hunchs?.length : 0}</Text>
							<Label>palpite{hunchs?.length > 1 && 's'}</Label>
						</InfoItem>

						<InfoItem>
							<Text>{ranking?.totalPoints > 0 ? ranking?.totalPoints : 0}</Text>
							<Label>ponto{ranking?.totalPoints > 1 && 's'}</Label>
						</InfoItem>

					</GroupItem>

					<GroupItem>
						<InfoItem>
							<Text>{jackpots > 0 ? jackpots : 0}</Text>
							<Label>{jackpots > 1 ? 'bolões' : 'bolão'}</Label>
						</InfoItem>

						<InfoItem>
							<Text>{percent > 0 ? percent : 0}%</Text>
							<Label>PRECISÃO</Label>
						</InfoItem>

						<InfoItem>
							<Text>{ranking?.totalAccuracy > 0 ? ranking?.totalAccuracy : 0}</Text>
							<Label>acerto{ranking?.totalAccuracy > 1 && 's'}</Label>
						</InfoItem>
					</GroupItem>
				</InfoBox>

			</Box>
		</Container>
	)
}

export default Profile
