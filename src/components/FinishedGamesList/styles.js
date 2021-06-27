import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
    flex: 1;
`;

export const Card = styled(LinearGradient)`
flex: 1;
justify-content: space-between;
border-radius: 8px;
padding: 10px;
margin: 10px 10px;
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
    margin-top: 5px;
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

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
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

export const ScoreText = styled.Text`
    color: #000;
    font-size: 12px;
    font-family: Quantico-Italic;
    
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
`;

export const TeamName = styled.Text`
    font-size: 12px;
    color: #000;
    font-weight: bold;
`;

export const Label = styled.Text`
font-size: 11px;
color: #000;
margin-left: 2px;
`;

export const Text = styled.Text`
    color: #000;
    font-style: italic;
    font-size: 12px;
    margin-right: 2px;
`;

export const HunchText = styled.Text`
    font-size: 35px;
    font-family: Quantico-Regular;
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



