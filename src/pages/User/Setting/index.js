import React, { useContext } from 'react';

import { AuthContext } from '../../../contexts/auth';

import { Container, Title, Label, Button } from './styles'

const Setting = () => {

	const { user, logOut } = useContext(AuthContext);

	return (
		<Container>
			<Title>CONFIGURAÇÕES</Title>
			<Label>Palpiteiro: {user && user.name}</Label>
			<Label>E-mail: {user && user.email}</Label>
			<Button onPress={logOut}>
				<Label style={{color: '#FFF'}}>Sair</Label>
			</Button>
		</Container>
	);
}

export default Setting