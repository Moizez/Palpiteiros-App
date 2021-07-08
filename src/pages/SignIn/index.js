import React, { useState, useContext, useEffect } from 'react'
import { Animated, StyleSheet, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../contexts/auth'
import Input from '../../components/Paper/Input'
import Button from '../../components/Paper/Button'

import {
	Container, Image, Link, LinkText, Title,
	BoxLink, InputContainer, ErrorBox, ErrorText
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

	const changeVisibility = () => setEye(!eye)

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
						<Input
							label='E-mail*'
							autoCorrect={false}
							autoCapitalize='none'
							keyboardType='email-address'
							value={formik.values.email}
							onChangeText={formik.handleChange('email')}
							onBlur={formik.handleBlur('email')}
							icon='email'
							error={formik.touched.email && formik.errors.email}
							hasIcon
						/>
						<ErrorBox>
							{formik.touched.email && formik.errors.email &&
								<ErrorText>{formik.errors.email}</ErrorText>
							}
						</ErrorBox>
					</InputContainer>

					<InputContainer>
						<Input
							placeholder='Senha*'
							label='Senha*'
							autoCorrect={false}
							autoCapitalize='none'
							value={formik.values.password}
							onChangeText={formik.handleChange('password')}
							onBlur={formik.handleBlur('password')}
							secureTextEntry={eye ? true : false}
							onPress={changeVisibility}
							icon={eye ? 'eye' : 'eye-off'}
							error={formik.touched.password && formik.errors.password}
							hasIcon
						/>
						<ErrorBox>
							{formik.touched.password && formik.errors.password &&
								<ErrorText>{formik.errors.password}</ErrorText>
							}
						</ErrorBox>
					</InputContainer>

					<Button
						onPress={formik.handleSubmit}
						loading={loadingAuth}
					>
						Entrar
					</Button>

					<BoxLink>
						<Link onPress={() => navigation.navigate('SignUp')}>
							<LinkText>Criar uma conta</LinkText>
						</Link>
						<LinkText style={{fontWeight: 'normal'}}> ou </LinkText>
						<Link onPress={() => navigation.navigate('ForgotPassword')}>
							<LinkText>recuperar sua senha?</LinkText>
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
