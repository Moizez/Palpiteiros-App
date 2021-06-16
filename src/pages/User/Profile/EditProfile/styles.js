import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
flex:1;
background-color: #022c6f;
padding: 20px 25px;
`;

export const Box = styled.View`
flex: 1;
margin-top: 50px;
background-color: #FFF;
border-radius: 5px;
padding: 5px 10px;
`;

export const EditButton = styled.TouchableOpacity`
    align-items: flex-end;
    margin-top: -60px;
`;

export const Header = styled.View`
margin-top: -50px;
justify-content: center;
`;

export const InfoBox = styled.View`
flex: 1;
padding: 10px 0;
`;

export const UserName = styled.Text`
font-size: 22px;
font-weight: bold;
color: #022c6f;
text-align: center;
`;

export const Image = styled.Image`
width: 90px;
height: 90px;
border-radius: 45px;
border-width: 0.5px;
border-color: #FFF;
margin-bottom: 20px;
`;

export const Divider = styled.View`
width: 100%;
height: 0.5px;
margin: 10px 0;
background-color: #022c6f;
`;

export const Label = styled.Text`
    font-size: 10px;
    margin-bottom: 5px;
`;

export const InputContainer = styled.View`
    width: 100%;
`;

export const ErrorBox = styled.View`
    align-self: flex-start;
`;

export const ErrorText = styled.Text`
    font-size: 11px;
    color: #c1121f;
    margin-top: -8px;
    margin-bottom: 3px;
`;

export const Modal = styled.Modal``;


