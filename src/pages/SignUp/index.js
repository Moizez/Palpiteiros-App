import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../contexts/auth'
import validate from '../../helpers/validations'
import Input from '../../components/Paper/Input'
import Button from '../../components/Paper/Button'

import {
	Container, Title, InputContainer, ErrorBox, ErrorText
} from './styles'

const SignUp = () => {

	const { handleSignUp, loadingAuth } = useContext(AuthContext)

	const validationSchema = yup.object().shape({
		name: yup.string().required('O nome é obrigatório!'),
		/*cpf: yup.string()
			.required('O CPF é obrigatório!')
			.test('cpf', 'CPF inválido!', async value => await validate.cpf(value)),*/
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
				<Input
					label='Nome*'
					autoCapitalize='sentences'
					keyboardType='name-phone-pad'
					value={formik.values.name}
					onChangeText={formik.handleChange('name')}
					onBlur={formik.handleBlur('name')}
					error={formik.touched.name && formik.errors.name}
				/>
				<ErrorBox>
					{formik.touched.name && formik.errors.name &&
						<ErrorText>{formik.errors.name}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				<Input
					label='CPF'
					keyboardType='phone-pad'
					value={formik.values.cpf}
					onChangeText={async (text) => formik.setFieldValue('cpf', await validate.cpfMask(text))}
					onBlur={formik.handleBlur('cpf')}
					error={formik.touched.cpf && formik.errors.cpf}
				/>
				<ErrorBox>
					{formik.touched.cpf && formik.errors.cpf &&
						<ErrorText>{formik.errors.cpf}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				<Input
					label='Telefone*'
					keyboardType='phone-pad'
					value={formik.values.phone}
					onChangeText={async (text) => formik.setFieldValue('phone', await validate.phoneMask(text))}
					onBlur={formik.handleBlur('phone')}
					error={formik.touched.phone && formik.errors.phone}
				/>
				<ErrorBox>
					{formik.touched.phone && formik.errors.phone &&
						<ErrorText>{formik.errors.phone}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				<Input
					label='E-mail*'
					autoCorrect={false}
					autoCapitalize='none'
					keyboardType='email-address'
					value={formik.values.email}
					onChangeText={formik.handleChange('email')}
					onBlur={formik.handleBlur('email')}
					error={formik.touched.email && formik.errors.email}
				/>
				<ErrorBox>
					{formik.touched.email && formik.errors.email &&
						<ErrorText>{formik.errors.email}</ErrorText>
					}
				</ErrorBox>
			</InputContainer>

			<InputContainer>
				<Input
					label='Senha*'
					autoCorrect={false}
					autoCapitalize='none'
					value={formik.values.password}
					onChangeText={formik.handleChange('password')}
					onBlur={formik.handleBlur('password')}
					error={formik.touched.password && formik.errors.password}
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
				Cadastrar
					</Button>

		</Container>
	)
}

export default SignUp