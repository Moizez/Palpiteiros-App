import React, { useState, useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RadioButton } from 'react-native-paper'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { changeFlags } from '../../../helpers/data'

import {
    Container, CloseContainer, ModalBox, CloseButton,
    ModalHeader, Title, HunchInfo, HunchScoreBox, Text,
    Team, HunchScore, TeamName, HunchButton, ErrorBox,
    ErrorText, Input, Flag, PenaltyBox, Divider
} from './styles'

const HunchModal = ({
    data, closeModal, handleHunch, golsHome, golsAway, idWinner
}) => {

    const [hasOnButton, setHasOnButton] = useState(false)
    const inputRef = useRef();

    const validationSchema = yup.object().shape({
        home: yup.string()
            .required(`Digite um placar para ${data.teamHome.name}`),
        // .test('home', 'Caiu', value => typeof value == number),
        away: yup.string()
            .required(`Digite um placar para ${data.teamVisiting.name}`),
        //winner: yup.string()
        //  .required(`Selecione um vencedor entre ${data.teamHome.name} e ${data.teamVisiting.name}`),
    })

    const formik = useFormik({
        initialValues: { home: '', away: '', winner: '' },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            setHasOnButton(true)
            await handleHunch(data.id, values.home, values.away, values.winner)
            actions.resetForm()
            closeModal()
        }
    })

    useEffect(() => {
        formik.setFieldValue('home', golsHome?.toString())
        formik.setFieldValue('away', golsAway?.toString())
        formik.setFieldValue('winner', idWinner?.toString())
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
                                placeholder='_'
                                placeholderTextColor='#FFF'
                                keyboardType='phone-pad'
                                returnKeyType='next'
                                autoFocus={true}
                                blurOnSubmit={false}
                                value={formik.values?.home}
                                onSubmitEditing={() => inputRef.current.focus()}
                                onChangeText={formik.handleChange('home')}
                                onBlur={formik.handleBlur('home')}
                                error={formik.touched.home && formik.errors.home}
                            />
                        </HunchScore>

                        <Icon name='alpha-x' size={50} color='#FFF' />

                        <HunchScore>
                            <Input
                                placeholder='_'
                                placeholderTextColor='#FFF'
                                keyboardType='phone-pad'
                                ref={inputRef}
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

                {data.round.name.search('rodada') < 0 &&
                    formik.values.home === formik.values.away
                    && formik.values.home != null
                    && formik.values.away != null &&
                    <>
                        <Title style={{ textAlign: 'center' }}>Quem segue na competição?</Title>
                        <Divider />
                        <RadioButton.Group
                            onValueChange={formik.handleChange('winner')}
                            value={formik.values?.winner}
                        >
                            <PenaltyBox>
                                <RadioButton.Item
                                    label={data.teamHome?.initials}
                                    value={data.teamHome?.id.toString()}
                                    labelStyle={{ marginRight: 45 }}
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderRadius: 5,
                                    }}
                                />
                                <TeamName>X</TeamName>
                                <RadioButton.Item
                                    label={data.teamVisiting?.initials}
                                    value={data.teamVisiting?.id.toString()}
                                    labelStyle={{ marginRight: 45 }}
                                    style={{
                                        backgroundColor: '#FFF',
                                        borderRadius: 5,
                                    }}
                                />
                            </PenaltyBox>
                        </RadioButton.Group>
                    </>
                }

                <HunchButton onPress={formik.handleSubmit} disabled={hasOnButton} activeOpacity={0.8}>
                    <Icon name='dice-multiple' color='#fff' size={25} />
                    <Text style={{ marginLeft: 5 }}>Salvar</Text>
                </HunchButton>

            </ModalBox>
        </Container >
    );
}

export default HunchModal


