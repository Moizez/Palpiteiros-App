import React, { useContext, useEffect, useState } from 'react';

import api_hunchs from '../../../../services/api_hunchs'
import api_ranking from '../../../../services/api_ranking'
import api_jackpots from '../../../../services/api_jackpots'
import avatar from '../../../../assets/images/avatar.jpg'

import {
	Container, Header, Image, InfoBox, GroupItem, InfoItem,
	Title, Line, ScoreBox, Label, Box, UserName, Text
} from './styles'

const OtherProfiles = ({ route }) => {

	const { data } = route.params

	const [hunchs, setHunchs] = useState([])
	const [ranking, setRanking] = useState([])
	const [jackpots, setJackpots] = useState([])

	const getHunchs = async () => {
		const data = await api_hunchs.getAllHunchsById(data.user?.id)
		setHunchs(data)
	}

	const getRanks = async () => {
		const data = await api_ranking.getRankingByUser(data.user?.id)
		setRanking(data)
	}

	const getJackpots = async () => {
		const data = await api_jackpots.getJackpotsByUserIdOfLength(data.user?.id)
		setJackpots(data)
	}

	const roleOfTree = () => {
		const totalHunchs = hunchs?.length
		const x = (ranking?.totalAccuracy * 100) / totalHunchs
		if (x > 0) return x.toFixed(0)
	}
	const percent = roleOfTree()

	useEffect(() => {
		getHunchs()
		getRanks()
		getJackpots()
		roleOfTree()
	}, [])

	return (
		<Container>
			<Header>
				<Image
					source={avatar}
					resizeMode='cover'
				/>
				<UserName>{data.user?.name}</UserName>
			</Header>

			<Box>
				<ScoreBox>
					<Title style={{ fontSize: 70, fontWeight: 'bold' }}>15</Title>
					<Label style={{ color: '#022c6f' }}>LEVEL</Label>
				</ScoreBox>

				<Line />

				<InfoBox>
					<GroupItem>
						<InfoItem>
							<Text>{hunchs?.length > 0 ? hunchs?.length : 0}</Text>
							<Label>palpite{hunchs?.length > 1 && 's'}</Label>
						</InfoItem>

						<InfoItem>
							<Text>{ranking?.totalPoints}</Text>
							<Label>ponto{ranking?.totalPoints > 1 && 's'}</Label>
						</InfoItem>

					</GroupItem>

					<GroupItem>
						<InfoItem>
							<Text>{jackpots}</Text>
							<Label>{jackpots > 1 ? 'bolões' : 'bolão'}</Label>
						</InfoItem>

						<InfoItem>
							<Text>{percent}%</Text>
							<Label>PRECISÃO</Label>
						</InfoItem>

						<InfoItem>
							<Text>{ranking?.totalAccuracy}</Text>
							<Label>acerto{ranking?.totalAccuracy > 1 && 's'}</Label>
						</InfoItem>
					</GroupItem>
				</InfoBox>

			</Box>
		</Container>
	)
}

export default OtherProfiles
