import React from 'react'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import { changeFlags } from '../../../../../helpers/data'

const UserHunches = ({ data }) => {

    const result = data?.hunches?.slice(0, 2).map(i => i?.resultHunch?.confrontation)
    //const result = res.map(i => i.teamHome.name)
    //console.log(result?.map(j => j?.teamHome?.initials))

    return (
        <Container showsVerticalScrollIndicator={false}>

            <Card
                style={{ elevation: 3 }}
                colors={['#ddd', '#f5f3f4']}
            >
                <CardContent>

                    <FlagBox>
                        <Image
                            source={changeFlags('ITA')}
                            resizeMode='contain'
                        />
                        <FlagText>ITA</FlagText>
                    </FlagBox>


                    <InfoBox>
                        <Text>
                            1
                            <Text> X </Text>
                            0
                        </Text>
                    </InfoBox>

                    <FlagBox>
                        <Image
                            source={changeFlags('ALE')}
                            resizeMode='contain'
                        />
                        <FlagText>ALE</FlagText>
                    </FlagBox>

                </CardContent>
            </Card>

        </Container>
    )
}

const Container = styled.ScrollView``;

const Card = styled(LinearGradient)`
    flex: 1;
    padding: 10px;
    margin: 10px 20px;
    border-radius: 8px;
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
    font-family: ${props=>props.theme.fontQRegular};
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


export default UserHunches

/*
 {data?.hunches?.slice(0, 4).map(hunch =>
                <Box key={hunch.id}>

                    {result?.map(team =>
                        <Team>
                            <Flag source={changeFlags(team?.teamHome?.initials)} />
                            <TeamName>{team?.teamHome?.initials}</TeamName>
                        </Team>
                    )}

                    <Text>{hunch.resultHunch.golsHome}</Text>
                    <Text>X</Text>
                    <Text>{hunch.resultHunch.golsVisiting}</Text>

                    {result?.map(team =>
                        <Team>
                            <Flag source={changeFlags(team?.teamVisiting?.initials)} />
                            <TeamName>{team?.teamVisiting?.initials}</TeamName>
                        </Team>
                    )}


                </Box>
            )}

*/