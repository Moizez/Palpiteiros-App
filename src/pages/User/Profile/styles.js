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
border-radius: 10px;
padding: 5px 10px;
`;

export const HeaderBox = styled.View`
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
`;

export const UserName = styled.Text`
font-size: 22px;
font-weight: bold;
color: #022c6f;
`;

export const Text = styled.Text`
font-size: 12px;
color: #022c6f;
border-width: 1px;
border-radius: 5px;
padding: 0 5px;
margin: 5px 0 10px 0;
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
export const LvBox = styled.View`
    flex: 0.5;
`;

export const AttributeBox = styled.View`
flex: 1;
flex-direction: row;
`;

export const Attribute = styled(LinearGradient)`
flex: 1;
height: 80px;
width: 80px;
border-radius: 10px;
margin: 5px;
`;


