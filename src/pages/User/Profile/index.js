import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
	Container, Header, Image, InfoBox, GroupItem, InfoItem, Title, Line, BoxLine, ScoreBox, Label
} from './styles'

const Profile = ({ route }) => {

	//const { data } = route.params

	return (
		<Container>
			<Header>
				<Image
					source={{ uri: 'https://scontent.fmvf5-1.fna.fbcdn.net/v/t1.0-9/50762682_10211802434329959_3523544453279121408_n.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=AmsvQV7M6lkAX-b5AMd&_nc_ht=scontent.fmvf5-1.fna&oh=793f426a010f9e875d0be0f6410c9b19&oe=6057ED9D' }}
					resizeMode='cover'
				/>
				<Title>Moisés Henrique</Title>
			</Header>

			<BoxLine>
				<Line />
			</BoxLine>

			<ScoreBox>
				<Title style={{ fontSize: 70, fontWeight: 'bold' }}>15</Title>
				<Icon name='home' color='#FFF' size={50} />
				<Label>LEVEL</Label>
			</ScoreBox>

			<BoxLine>
				<Line />
			</BoxLine>

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
		</Container>
	);
}

export default Profile