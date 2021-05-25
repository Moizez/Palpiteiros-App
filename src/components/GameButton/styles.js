import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient)`
width: 60px;
height: 60px;
border-radius: 30px;
border-width: 0.7px;
border-color: ${({ focused }) => focused ? '#FFF' : '#92929C'};
align-items: center;
justify-content: center;
`;

export const Label = styled.Text`
font-size: 11px;
color: ${({ focused }) => focused ? '#FFF' : '#92929C'};
`;