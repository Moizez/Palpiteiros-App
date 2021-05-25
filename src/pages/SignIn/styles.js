import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;
export const Image = styled.View`
flex: 1;
justify-content: center;
margin-top: 30px;
`;

export const BoxInput = styled.View`
flex-direction: row;
align-items: center;
`;

export const BoxIcon = styled.TouchableOpacity`
background-color: #d3d3d3;
height: 48px;
width: 45px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
margin-bottom: 15px;
align-items: center;
justify-content: center;
`;


export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#022c6f'
})`
background: rgba(0,0,0,0.20);
width: 80%;
height: 48px;
font-size: 17px;
color: #022c6f;
margin-bottom: 15px;
padding: 10px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #022c6f;
width: 96%;
height: 45px;
border-radius: 7px;
margin-top: 10px;
`;

export const Title = styled.Text`
color: #022c6f;
font-size: 18px;
margin-bottom: 5px;
`;

export const Label = styled.Text`
font-size: 20px;
color: #FFF;
`;

export const Link = styled.TouchableOpacity`
`;

export const BoxLink = styled.View`
flex-direction: row;
align-items: center;
margin-top: 15px;
`;

export const LinkText = styled.Text`
color: #022c6f;
`;