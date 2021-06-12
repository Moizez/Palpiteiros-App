import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
    flex: 1;
`;

export const Card = styled(LinearGradient)`
flex: 1;
justify-content: space-between;
width: 100%;
border-radius: 8px;
padding: 10px;
margin: 8px 0;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CardHunch = styled.View`
    flex: 1;
`;

export const Score = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HunchInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
`;

export const HunchScore = styled.View`
    width: 45px;
    height: 55px;
    border-width: 0.5px;
    border-color: #000;
    align-items: center;
    justify-content: center;
`;

export const HunchScoreBox = styled.View`
    flex-direction: row;
`;

export const Team = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Flag = styled.Image`
    width: 55px;
    height: 35px;
`;

export const Status = styled.View`
    margin: 0 30%;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
`;

export const ScoreText = styled.Text`
    color: #da1e37;
    margin: 5px 2px; 
    font-size: 15px;
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
`;

export const TeamName = styled.Text`
    font-size: 12px;
    color: #000;
`;


export const Label = styled.Text`
font-size: 11px;
color: #000;
margin-left: 2px;
`;

export const Text = styled.Text`
    color: #FFF;
`;

export const HunchText = styled.Text`
    font-size: 35px;
    color: #000;
`;

export const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background-color: #000;
    margin: 3px 0;
    opacity: 0.2;
`;

export const Modal = styled.Modal``;



