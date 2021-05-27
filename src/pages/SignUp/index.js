import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../contexts/auth'

import {
	Container, Input, Button, Label, Title, InputContainer, InputBox,
	ErrorBox, ErrorText, Text
} from './styles'

const SignUp = () => {

	const { handleSignUp, loadingAuth } = useContext(AuthContext)
	const navigation = useNavigation()

	const validationSchema = yup.object().shape({
		name: yup.string().required('O nome é obrigatório!'),
		cpf: yup.string().required('O CPF é obrigatório!'),
		phone: yup.string().required('O telefone é obrigatório!'),
		email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
		password: yup.string().required('A senha é obrigatória!'),
	})

	const initialFormState = {
		name: '',
		cpf: '',
		phone: '',
		email: '',
		password: ''
	}

	const formik = useFormik({
		initialValues: initialFormState,
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			await handleSignUp(values)
		}
	})

	return (
		<Container behavior='padding'>

			<Title>Realize o seu cadastro</Title>
			<InputContainer>
				{formik.values.name != '' && <Text>Nome:</Text>}
				<InputBox>
					<Input
						placeholder='Nome*'
						autoCorrect={false}
						autoCapitalize='sentences'
						keyboardType='name-phone-pad'
						value={formik.values.name}
						onChangeText={formik.handleChange('name')}
						onBlur={formik.handleBlur('name')}
					/>
				</InputBox>
				<ErrorBox>
					{formik.touched.name && formik.errors.name &&
						<ErrorText>{formik.errors.name}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				{formik.values.cpf != '' && <Text>CPF:</Text>}
				<InputBox>
					<Input
						placeholder='CPF*'
						autoCorrect={false}
						keyboardType='phone-pad'
						value={formik.values.cpf}
						onChangeText={formik.handleChange('cpf')}
						onBlur={formik.handleBlur('cpf')}
					/>
				</InputBox>
				<ErrorBox>
					{formik.touched.cpf && formik.errors.cpf &&
						<ErrorText>{formik.errors.cpf}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				{formik.values.phone != '' && <Text>Telefone:</Text>}
				<InputBox>
					<Input
						placeholder='Telefone*'
						autoCorrect={false}
						keyboardType='phone-pad'
						value={formik.values.phone}
						onChangeText={formik.handleChange('phone')}
						onBlur={formik.handleBlur('phone')}
					/>
				</InputBox>
				<ErrorBox>
					{formik.touched.phone && formik.errors.phone &&
						<ErrorText>{formik.errors.phone}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

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
				</InputBox>
				<ErrorBox>
					{formik.touched.email && formik.errors.email &&
						<ErrorText>{formik.errors.email}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				{formik.values.password != '' && <Text>Senha:</Text>}
				<InputBox>
					<Input
						placeholder='Senha*'
						autoCorrect={false}
						autoCapitalize='none'
						value={formik.values.password}
						onChangeText={formik.handleChange('password')}
						onBlur={formik.handleBlur('password')}
					/>
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
						<Label>Cadastrar</Label>
					)
				}
			</Button>

		</Container>
	)
}

export default SignUp