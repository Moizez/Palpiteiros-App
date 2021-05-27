import React, { useState, useContext, useEffect } from 'react'
import { Animated, StyleSheet, Keyboard, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../contexts/auth'

import {
	Container, Image, Input, Button, Label, Link, LinkText, Title,
	BoxIcon, BoxLink, InputContainer, InputBox, ErrorBox, ErrorText, Text
} from './styles'

const SignIn = () => {

	const navigation = useNavigation()
	const { handleSignIn, loadingAuth } = useContext(AuthContext)
	const [eye, setEye] = useState(false)

	//Animação da tela de login
	const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }))
	const [opacity] = useState(new Animated.Value(0))
	const [logo] = useState(new Animated.ValueXY({ x: 220, y: 220 }))


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

	const validationSchema = yup.object().shape({
		email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
		password: yup.string().required('A senha é obrigatória!'),
	})

	const formik = useFormik({
		initialValues: { email: '', password: '' },
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			await handleSignIn(values.email.trim(), values.password.trim())
		}
	})

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
					<InputContainer>
						{formik.values.email != '' && <Text>E-mail:</Text>}
						<InputBox>
							<Input
								placeholder='E-mail*'
								autoCorrect={false}
								autoCapitalize='none'
								keyboardType='email-address'
								value={formik.values.email}
								onChangeText={formik.handleChange('email')}
								onBlur={formik.handleBlur('email')}
							/>
							<BoxIcon activeOpacity={1}>
								<Icon name='email' size={30} color='#022c6f' />
							</BoxIcon>
						</InputBox>
						<ErrorBox>
							{formik.touched.email && formik.errors.email &&
								<ErrorText>{formik.errors.email}</ErrorText>
							}
						</ErrorBox>
					</InputContainer>

					<InputContainer>
						{formik.values.password != '' && <Text>Senha*</Text>}
						<InputBox>
							<Input
								placeholder='Senha*'
								autoCorrect={false}
								autoCapitalize='none'
								value={formik.values.password}
								onChangeText={formik.handleChange('password')}
								onBlur={formik.handleBlur('password')}
								secureTextEntry={eye ? true : false}
							/>
							{formik.values.password ?
								<BoxIcon onPress={() => setEye(!eye)} activeOpacity={0.8}>
									<Icon name={eye ? 'eye' : 'eye-off'} size={28} color='#022c6f' />
								</BoxIcon>
								:
								<BoxIcon activeOpacity={1}>
									<Icon name='lock' size={28} color='#022c6f' />
								</BoxIcon>
							}
						</InputBox>
						<ErrorBox>
							{formik.touched.password && formik.errors.password &&
								<ErrorText>{formik.errors.password}</ErrorText>
							}
						</ErrorBox>
					</InputContainer>

					<Button onPress={formik.handleSubmit}>
						{
							loadingAuth ? (
								<ActivityIndicator size={20} color="#FFF" />
							) : (
								<Label>Acessar</Label>
							)
						}
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
	)
}

const styles = StyleSheet.create({
	boxInput: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 35,
		paddingBottom: 30
	}
})

export default SignIn
