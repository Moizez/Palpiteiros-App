import React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LottieView from 'lottie-react-native'

import podium_gb from '../../../assets/images/podium/bg1.jpg'
import profile_picture from '../../../assets/images/avatar.jpg'
import fireworks from '../../../assets/lotties/fireworks.json'

const PodiumModal = ({ closeModal }) => {

    const first_color = ['#ffc300', '#ffd000']
    const second_color = ['#adb5bd', '#ced4da']
    const third_color = ['#974716', '#a15019']

    return (
        <Container>
            <CloseContainer onPress={closeModal} activeOpacity={1} />

            <Box>

                <BackgroundCard source={podium_gb} resizeMode="cover">

                    <Title>pódio palpiteiros</Title>

                    <Card>


                        <Second>
                            <SecondInfo>
                                <Image
                                    source={profile_picture}
                                    resizeMode='cover'
                                />
                                <Text>Antonio</Text>
                            </SecondInfo>

                            <SecondPodium colors={second_color}>
                                <Icon name='numeric-2-circle' size={45} color='#343a40' />
                            </SecondPodium>

                        </Second>

                        <First>
                            <FirstInfo>
                                <Image
                                    source={profile_picture}
                                    resizeMode='cover'
                                />
                                <Text>Moisés</Text>
                            </FirstInfo>

                            <FirstPodium colors={first_color}>
                                <Icon name='numeric-1-circle' size={55} color='#343a40' />
                            </FirstPodium>

                        </First>

                        <Third>
                            <ThirdInfo>
                                <Image
                                    source={profile_picture}
                                    resizeMode='cover'
                                />
                                <Text>Robson</Text>
                            </ThirdInfo>

                            <ThirdPodium colors={third_color}>
                                <Icon name='numeric-3-circle' size={40} color='#343a40' />
                            </ThirdPodium>

                        </Third>

                    </Card>

                </BackgroundCard>

                <LottieView
                    source={fireworks}
                    autoPlay
                    loop={false}
                />

            </Box>

            <CloseContainer onPress={closeModal} activeOpacity={1} />

        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
`;

export const CloseContainer = styled.TouchableOpacity`
    flex: 1;
`;

const Box = styled.View`
    flex: 2;
    padding: 6px;
    background-color: #FFF;
    border-radius: 10px;
`;

const BackgroundCard = styled.ImageBackground`
    flex: 1;
`;

const Card = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 40px;
    border-color: #fff;
    border-width: 1px;
`;

const First = styled.View`
    flex: 1;
`;

const FirstInfo = styled.View`
    flex: 0.7;
    align-items: center;
    justify-content: center;
`;

const FirstPodium = styled(LinearGradient)`
    flex: 0.3;
    align-items: center;
    justify-content: center;
`;

const Second = styled.View`
    flex: 1;
`;

const SecondInfo = styled.View`
    flex: 0.8;
    align-items: center;
    justify-content: center;
`;

const SecondPodium = styled(LinearGradient)`
    flex: 0.2;
    align-items: center;
    justify-content: center;
`;

const Third = styled.View`
    flex: 1;
`;

const ThirdInfo = styled.View`
    flex: 0.85;
    align-items: center;
    justify-content: center;
`;

const ThirdPodium = styled(LinearGradient)`
    flex: 0.15;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    color: #fff;
    font-family:  ${props => props.theme.fontQRegular};
    font-size: 18px;
`;

const Title = styled.Text`
    color: #fff;
    font-family:  ${props => props.theme.fontQBold};
    font-size: 25px;
    text-align: center;
    margin-top: 15px;
    text-transform: uppercase;
`;


export default PodiumModal
