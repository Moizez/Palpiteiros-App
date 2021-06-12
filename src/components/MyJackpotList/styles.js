import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.TouchableOpacity`
    flex: 1;
`

export const Card = styled(LinearGradient)`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
`;

export const ImageBox = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 60px;
    height: 60px;
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

export const Modal = styled.Modal``;

export const VerticalDivider = styled.View`
    height: 100%;
    width: 0.5px;
    background-color: #000;
    opacity: 0.5px;
    margin: 0 10px;
`;

export const UserBox = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;




