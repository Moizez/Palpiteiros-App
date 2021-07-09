import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import * as yup from 'yup'

import api from '../../services/api'

import Input from '../../components/Paper/Input'
import Button from '../../components/Paper/Button'
import Snackbar from '../../components/Snackbar'

const ForgotPassword = () => {

	const navigation = useNavigation()
	const [showSnack, setShowSnack] = useState(false)
	const [message, setMessage] = useState('')
	const [snackColor, setSnackColor] = useState('')
	const [snackTime, setSnackTime] = useState(null)

	const validationSchema = yup.object().shape({
		email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
	})

	const formik = useFormik({
		initialValues: { email: '' },
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			const response = await api.onForgotPassword(values.email)
			console.log(response.status)

			if (response.status >= 200 && response.status <= 299) {
				setMessage('Deu certo!')
				setSnackColor('#43aa8b')
				setSnackTime(2000)
				handleShowSnack()
			} else {
				setMessage(response.message)
				setSnackColor('#ad2e24')
				setSnackTime(5000)
				handleShowSnack()
			}
		}
	})

	const handleShowSnack = () => setShowSnack(true)
	const handleCloseSnack = () => setShowSnack(false)

	return (
		<Container behavior='padding'>

			<BackButton onPress={() => navigation.goBack()}>
				<Icon name='chevron-down' size={40} color='#022c6f' />
			</BackButton>

			<Title>Recupere sua senha</Title>

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

			<Button
				onPress={formik.handleSubmit}
			>
				Recuperar
			</Button>

			<Modal
				visible={showSnack}
				animationType='fade'
				transparent={true}
			>
				<Snackbar
					message={message}
					onDismiss={handleCloseSnack}
					hasBgColor
					hasColor={snackColor}
					time={snackTime}
				/>
			</Modal>

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

const Modal = styled.Modal``;


export default ForgotPassword