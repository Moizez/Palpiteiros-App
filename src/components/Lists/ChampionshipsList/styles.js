import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.TouchableOpacity`
    flex: 1;
`;

export const Card = styled(LinearGradient)`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 2px;
`;

export const Image = styled.Image`
    width: 80px;
    height: 80px;
`;

export const CardHeader = styled.View``;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Label = styled.Text`
    font-size: 15px;
`;


export const VerticalDivider = styled.View`
    height: 100%;
    width: 0.5px;
    background-color: #000;
    opacity: 0.5;
    margin: 0 10px;
`;