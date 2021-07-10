import React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Loading from '../../../../../components/Loading'
import { changeFlags } from '../../../../../helpers/data'

const UserHunches = ({ data, loading }) => {

    return (
        <>
            <Container showsVerticalScrollIndicator={false}>
                {data?.hunches?.map(hunch =>
                    <Card
                        key={hunch.id}
                        style={{ elevation: 3 }}
                        colors={['#ddd', '#f5f3f4']}
                    >
                        <CardContent>

                            <FlagBox>
                                <Image
                                    source={changeFlags(hunch?.resultHunch?.confrontation?.teamHome?.initials)}
                                    resizeMode='contain'
                                />
                                <FlagText>{hunch?.resultHunch?.confrontation?.teamHome?.initials}</FlagText>
                            </FlagBox>

                            <InfoBox>
                                <Text>
                                    {hunch?.resultHunch?.golsHome}
                                    <Text> X </Text>
                                    {hunch?.resultHunch?.golsVisiting}
                                </Text>
                            </InfoBox>

                            <FlagBox>
                                <Image
                                    source={changeFlags(hunch?.resultHunch?.confrontation?.teamVisiting?.initials)}
                                    resizeMode='contain'
                                />
                                <FlagText>{hunch?.resultHunch?.confrontation?.teamVisiting?.initials}</FlagText>
                            </FlagBox>

                        </CardContent>

                        <Status>
                            <StatusText>
                                {
                                    (hunch?.resultHunch?.registerHunch) &&
                                        hunch?.resultHunch?.registerHunch?.accuracy
                                        ? '+3'
                                        : hunch?.resultHunch?.registerHunch?.hit
                                            ? '+1'
                                            : null
                                }
                            </StatusText>
                            <Icon
                                name='soccer'
                                size={15}
                                color={
                                    (hunch?.resultHunch?.registerHunch) &&
                                        hunch?.resultHunch?.registerHunch?.accuracy
                                        ? '#38b000'
                                        : hunch?.resultHunch?.registerHunch?.hit
                                            ? '#00b4d8'
                                            : '#da1e37'
                                }
                            />
                        </Status>

                    </Card>
                )}
            </Container>
            {loading &&
                <Loading
                    lottie={require('../../../../../assets/lotties/loading.json')}
                    bgColor='#FFF'
                />
            }
        </>
    )
}

const Container = styled.ScrollView``;

const Card = styled(LinearGradient)`
    flex: 1;
    padding: 10px;
    margin: 8px 10px;
    border-radius: 5px;
`;

const CardContent = styled.View`
    height: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const FlagBox = styled.View`
    align-items: center;
`;

const InfoBox = styled.View`
`;

const Text = styled.Text`
    font-family: ${props => props.theme.fontQRegular};
    font-size: 22px;
    text-align: center;
`;

const FlagText = styled.Text`
    font-weight: bold;
    font-size: 11px;
    margin-top: -8px;
`;

const Image = styled.Image`
    height: 40px;
    width: 30px;
`;

const Status = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StatusText = styled.Text`
    color: #000;
    font-style: italic;
    font-size: 12px;
    margin-right: 2px;
`;

export default UserHunches

