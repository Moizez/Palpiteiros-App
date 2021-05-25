import React, { useState, useContext, useEffect } from 'react';
import { Platform, Animated, StyleSheet, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../../contexts/auth';

import {
	Container, Image, Input, BoxInput, Button, Label, Link, LinkText, Title, BoxIcon, BoxLink
} from './styles';

const SignIn = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signIn } = useContext(AuthContext)
	const [eye, setEye] = useState(false)

	//Animação da tela de login
	const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }))
	const [opacity] = useState(new Animated.Value(0))
	const [logo] = useState(new Animated.ValueXY({ x: 220, y: 220 }))

	const handleLogin = async () => {  
		await signIn(email, password);
	}

	//Ciclo da animação da tela de login
	useEffect(() => {
		setEye(true)
		keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
		keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

		Animated.parallel([
			Animated.spring(offset.y, {
				toValue: 0,
				speed: 4,
				bounciness: 12,
				useNativeDriver: false
			}),
			Animated.timing(opacity, {
				toValue: 1,
				duration: 300,
				useNativeDriver: false
			})

		]).start()

	}, [])

	//Função para verificar se o teclado está aberto e começar a animação da logo
	function keyboardDidShow() {

		Animated.parallel([

			Animated.timing(logo.x, {
				toValue: 100,
				duration: 100,
				useNativeDriver: false
			}),
			Animated.timing(logo.y, {
				toValue: 100,
				duration: 100,
				useNativeDriver: false
			}),

		]).start()

	}

	//Função para verificar se o teclado está fechado e retornar o tamanho da logo
	function keyboardDidHide() {

		Animated.parallel([

			Animated.timing(logo.x, {
				toValue: 225,
				duration: 100,
				useNativeDriver: false
			}),
			Animated.timing(logo.y, {
				toValue: 225,
				duration: 100,
				useNativeDriver: false
			}),

		]).start()

	}

	return (
		<>
			<Container behavior='padding'>
				<Image>
					<Animated.Image style={{
						width: logo.x,
						height: logo.y,
					}}
						source={require('../../assets/images/logo.png')} />
				</Image>
				<Animated.View
					style={[
						styles.boxInput,
						{
							opacity: opacity,
							transform: [
								{ translateY: offset.y }
							]
						}
					]}>
					<Title>Realize sua autenticação</Title>
					<BoxInput>
						<Input
							placeholder='E-mail'
							autoCorrect={false}
							autoCapitalize='none'
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<BoxIcon activeOpacity={1}>
							<Icon name='email' size={30} color='#022c6f' />
						</BoxIcon>
					</BoxInput>

					<BoxInput>
						<Input
							placeholder='Senha'
							autoCorrect={false}
							autoCapitalize='none'
							value={password}
							secureTextEntry={eye ? true : false}
							onChangeText={(text) => setPassword(text)}
						/>
						{password ?
							<BoxIcon onPress={() => setEye(!eye)} activeOpacity={0.8}>
								<Icon name={eye ? 'eye' : 'eye-off'} size={28} color='#022c6f' />
							</BoxIcon>
							:
							<BoxIcon activeOpacity={1}>
								<Icon name='lock' size={28} color='#022c6f' />
							</BoxIcon>
						}
					</BoxInput>

					<Button onPress={handleLogin}>
						<Label>Acessar</Label>
					</Button>

					<BoxLink>
						<Link onPress={() => navigation.navigate('SignUp')}>
							<LinkText>Criar uma conta</LinkText>
						</Link>
						<LinkText> ou </LinkText>
						<Link onPress={() => { }}>
							<LinkText>recupere sua senha</LinkText>
						</Link>
					</BoxLink>

				</Animated.View>
			</Container>
		</>
	);
}

const styles = StyleSheet.create({
	boxInput: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '80%',
		paddingBottom: 30
	}
})

export default SignIn
