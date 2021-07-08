import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
`;

export const Image = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    color: #022c6f;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Link = styled.TouchableOpacity`
`;

export const BoxLink = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const LinkText = styled.Text`
    color: #022c6f;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
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

export const Text = styled.Text`
    font-size: 11px;
    color: #495057;
`;