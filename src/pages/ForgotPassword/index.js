import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../contexts/auth'
import validate from '../../helpers/validations'
import Input from '../../components/Paper/Input'
import Button from '../../components/Paper/Button'

const ForgotPassword = () => {

	const navigation = useNavigation()
	const { handleSignUp, loadingAuth } = useContext(AuthContext)

	const validationSchema = yup.object().shape({
		name: yup.string().required('O nome é obrigatório!'),
		phone: yup.string().required('O telefone é obrigatório!'),
		email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
		password: yup.string().required('A senha é obrigatória!'),
	})

	const initialFormState = {
		name: '',
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

			<BackButton onPress={() => navigation.goBack()}>
				<Icon name='chevron-down' size={40} color='#022c6f' />
			</BackButton>

			<Title>Recupere sua senha</Title>
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
				Recuperar
			</Button>

		</Container>
	)
}

const Container = styled.KeyboardAvoidingView`
    flex:1;
    justify-content: center;
	align-items: center;
    padding: 0 35px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	top: 2%;
	left: 10%;
`;

const Title = styled.Text`
    color: #022c6f;
    font-size: 18px;
    margin-bottom: 10px;
	text-align: center;
`;

const InputContainer = styled.View`
    width: 100%;
`;

const ErrorBox = styled.View`
    align-self: flex-start;
`;

const ErrorText = styled.Text`
    font-size: 11px;
    color: #c1121f;
    margin-top: -8px;
    margin-bottom: 3px;
`;


export default ForgotPassword