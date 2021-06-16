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
border-color: #022c6f;
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
    height: 150px;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const LvInfo = styled.View`
    flex-direction: row;
`;

export const Lv = styled.Text`
    font-size: ${(props) => props.size >= 100 ? 50 : 70}px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Label = styled.Text`
    font-size: 10px;
    margin-bottom: 5px;
`;

export const AttributeBox = styled.View`
flex: 1;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin-top: 20px;
`;

export const Attribute = styled(LinearGradient)`
    height: 80px;
    width: 80px;
    border-radius: 10px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    padding: 3px;
`;

export const AttributeText = styled.Text`
    font-weight: bold;
    font-size: 22px;
`;

export const AttributeLabel = styled.Text`
    text-transform: uppercase;
    font-size: 11px;
    text-align: center;
`;

