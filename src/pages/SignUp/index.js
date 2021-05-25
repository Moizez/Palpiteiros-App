import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import {
	Container, Input, Button,
	Label
} from './styles';

const SignUp = () => {
	const [name, setName] = useState('');
	const [cpf, setCPF] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signUp } = useContext(AuthContext);

	const handleSignUp = () => {
		signUp(name, email, phone, password, cpf);
	}

	return (
		<Container
			behavior={Platform.OS === 'ios' ? 'padding' : ''}
			enabled
		>

			<Input
				placeholder="Palpiteiro(a)"
				autoCorrect={false}
				autoCapitalize="none"
				value={name}
				onChangeText={(text) => setName(text)}
			/>

			<Input
				placeholder="CPF"
				autoCorrect={false}
				autoCapitalize="none"
				value={cpf}
				onChangeText={(text) => setCPF(text)}
			/>

			<Input
				placeholder="Telefone"
				autoCorrect={false}
				autoCapitalize="none"
				value={phone}
				onChangeText={(text) => setPhone(text)}
			/>

			<Input
				placeholder="E-mail"
				autoCorrect={false}
				autoCapitalize="none"
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>

			<Input
				placeholder="Senha"
				autoCorrect={false}
				autoCapitalize="none"
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>

			<Button onPress={handleSignUp}>
				<Label>Cadastrar</Label>
			</Button>

		</Container>
	);
}

export default SignUp