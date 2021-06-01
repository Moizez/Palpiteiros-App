import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import * as yup from 'yup'

import {
    Container, CloseContainer, ModalBox, CloseButton,
    ModalHeader, Title, HunchInfo, HunchScoreBox, Text,
    Team, HunchScore, TeamName, HunchButton, ErrorBox,
    ErrorText, Input
} from './styles'

const HunchModal = ({ closeModal, data, handleScore }) => {

    const validationSchema = yup.object().shape({
        home: yup.number()
            .required('Digite um placar!')
            .integer()
            .min(0, 'Min. é 0')
            .max(10, 'Max. é 10'),
        away: yup.number()
            .required('Digite um placar!')
            .integer()
            .min(0, 'Min. é 0')
            .max(10, 'Max. é 10')
    })

    const formik = useFormik({
        initialValues: { home: null, away: null },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            handleScore(values.home, values.away)
            actions.resetForm()
            closeModal()
        }
    })

    return (
        <Container>
            <CloseContainer onPress={closeModal} activeOpacity={1} />
            <ModalBox>
                <ModalHeader>
                    <CloseButton onPress={closeModal}>
                        <Icon name='chevron-down' color='#FFF' size={35} />
                    </CloseButton>
                    <Title>Qual o seu palpite?</Title>
                </ModalHeader>

                <HunchInfo>
                    <Team>
                        {data.flag_home}
                        <TeamName>{data.team_home}</TeamName>
                    </Team>

                    <HunchScoreBox>

                        <HunchScore>
                            <Input
                                placeholder='__'
                                placeholderTextColor='#FFF'
                                keyboardType='phone-pad'
                                value={formik.values.home}
                                onChangeText={formik.handleChange('home')}
                                onBlur={formik.handleBlur('home')}
                                error={formik.touched.home && formik.errors.home}
                            />
                        </HunchScore>

                        <Icon name='alpha-x' size={50} color='#FFF' />

                        <HunchScore>
                            <Input
                                placeholder='__'
                                placeholderTextColor='#FFF'
                                keyboardType='phone-pad'
                                value={formik.values.away}
                                onChangeText={formik.handleChange('away')}
                                onBlur={formik.handleBlur('away')}
                                error={formik.touched.away && formik.errors.away}
                            />
                        </HunchScore>

                    </HunchScoreBox>

                    <Team>
                        {data.flag_away}
                        <TeamName>{data.team_away}</TeamName>
                    </Team>

                </HunchInfo>

                <ErrorBox>
                    {formik.touched.home && formik.errors.home &&
                        <ErrorText>{data.team_home}: {formik.errors.home}</ErrorText>
                    }

                    {formik.touched.away && formik.errors.away &&
                        <ErrorText>{data.team_away}: {formik.errors.away}</ErrorText>
                    }
                </ErrorBox>

                <HunchButton onPress={formik.handleSubmit}>
                    <Text>Salvar</Text>
                </HunchButton>

            </ModalBox>
        </Container>
    );
}

export default HunchModal


