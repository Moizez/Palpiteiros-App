import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { changeFlags } from '../../../helpers/data'

import {
    Container, CloseContainer, ModalBox, CloseButton,
    ModalHeader, Title, HunchInfo, HunchScoreBox, Text,
    Team, HunchScore, TeamName, HunchButton, ErrorBox,
    ErrorText, Input, Flag, PenaltyBox, HomeWin, AwayWin,
    TeamNamePn, Divider
} from './styles'

const HunchModal = ({ data, closeModal, handleHunch, golsHome, golsAway }) => {

    const validationSchema = yup.object().shape({
        home: yup.string()
            .required(`Digite um placar para ${data.teamHome.name}`),
        // .test('home', 'Caiu', value => typeof value == number),
        away: yup.string()
            .required(`Digite um placar para ${data.teamVisiting.name}`)
    })

    const formik = useFormik({
        initialValues: { home: '', away: '' },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            handleHunch(data.id, values.home, values.away)
            actions.resetForm()
            closeModal()
        }
    })

    useEffect(() => {
        formik.setFieldValue('home', golsHome?.toString())
        formik.setFieldValue('away', golsAway?.toString())
    }, [])

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
                        <Flag source={changeFlags(data.teamHome.initials)} />
                        <TeamName>{data.teamHome.initials}</TeamName>
                    </Team>

                    <HunchScoreBox>

                        <HunchScore>
                            <Input
                                placeholder='__'
                                placeholderTextColor='#FFF'
                                keyboardType='phone-pad'
                                value={formik.values?.home}
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
                                value={formik.values?.away}
                                onChangeText={formik.handleChange('away')}
                                onBlur={formik.handleBlur('away')}
                                error={formik.touched.away && formik.errors.away}
                            />
                        </HunchScore>

                    </HunchScoreBox>

                    <Team>
                        <Flag source={changeFlags(data.teamVisiting.initials)} />
                        <TeamName>{data.teamVisiting.initials}</TeamName>
                    </Team>

                </HunchInfo>

                <ErrorBox>
                    {formik.touched.home && formik.errors.home &&
                        <ErrorText>{formik.errors.home}</ErrorText>
                    }

                    {formik.touched.away && formik.errors.away &&
                        <ErrorText>{formik.errors.away}</ErrorText>
                    }
                </ErrorBox>

                {formik.values.home
                    === formik.values.away
                    && formik.values.home != null
                    && formik.values.away != null &&
                    <>
                        <Title style={{ textAlign: 'center' }}>Quem segue na competição?</Title>
                        <Divider />
                        <PenaltyBox>
                            <HomeWin>
                                <TeamNamePn>{data.teamHome.initials}</TeamNamePn>
                            </HomeWin>
                            <TeamName>X</TeamName>
                            <AwayWin>
                                <TeamNamePn>{data.teamVisiting.initials}</TeamNamePn>
                            </AwayWin>
                        </PenaltyBox>
                    </>
                }

                <HunchButton onPress={formik.handleSubmit}>
                    <Text>Salvar</Text>
                </HunchButton>

            </ModalBox>
        </Container >
    );
}

export default HunchModal


