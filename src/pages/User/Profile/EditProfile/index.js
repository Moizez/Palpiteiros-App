import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { AuthContext } from '../../../../contexts/auth'
import api from '../../../../services/api'
import avatar from '../../../../assets/images/avatar.jpg'
import Input from '../../../../components/Paper/Input'
import Button from '../../../../components/Paper/Button'
import Snackbar from '../../../../components/Snackbar'
import validate from '../../../../helpers/validations'

import {
    Container, Header, Image, InfoBox, EditButton,
    Divider, Box, UserName, InputContainer, ErrorBox,
    ErrorText, Modal
} from './styles'

const EditProfile = () => {

    const { userProfile, loadUser, loadingAuth } = useContext(AuthContext)
    const navigation = useNavigation()

    const [showSnack, setShowSnack] = useState(false)
    const [snackColor, setSnackColor] = useState('')
    const [snackTime, setSnackTime] = useState(null)
    const [message, setMessage] = useState('')

    const validationSchema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório!'),
        phone: yup.string().required('O telefone é obrigatório!'),
        email: yup.string().email('Digite um e-mail válido!').required('O e-mail é obrigatório!'),
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
            const response = await api.onUpdateUser(values)
            if (response.data) {
                await loadUser()
                setMessage('Palpiteiro atualizado com sucesso!')
                setSnackColor('#43aa8b')
                setSnackTime(2000)
                handleShowSnack()
                setTimeout(() => {
                    navigation.goBack()
                }, 1000);
            } else {
                setSnackColor('#ad2e24')
                setSnackTime(5000)
                setMessage(`Falha inesperada! Erro: ${response.status}`)
                handleShowSnack()
            }
        }
    })

    useEffect(() => {
        formik.setFieldValue('name', userProfile.name?.toString())
        formik.setFieldValue('phone', userProfile.phone?.toString())
        formik.setFieldValue('email', userProfile.email?.toString())
    }, [])

    const handleShowSnack = () => setShowSnack(true)
    const handleCloseSnack = () => setShowSnack(false)

    return (
        <Container>

            <Box style={{ elevation: 3 }}>
                <Header>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={avatar}
                            resizeMode='cover'
                        />
                    </View>
                    <EditButton onPress={() => navigation.goBack()}>
                        <Icon name='chevron-down' size={30} color='#022c6f' />
                    </EditButton>
                    <View style={{ alignItems: 'center', marginTop: 25 }}>
                        <UserName>{userProfile?.name}</UserName>
                    </View>
                </Header>

                <Divider />

                <InfoBox showsVerticalScrollIndicator={false}>

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
                            label='Senha'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={formik.values.password}
                            onChangeText={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                        />
                    </InputContainer>

                </InfoBox>
                <View style={{ marginBottom: 20 }}>
                    <Button
                        onPress={formik.handleSubmit}
                        loading={loadingAuth}
                    >
                        Salvar
                    </Button>
                </View>
            </Box>

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
                    hasBottom='-40%'
                    time={snackTime}
                />
            </Modal>
        </Container>
    )
}

export default EditProfile