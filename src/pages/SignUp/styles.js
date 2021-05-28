import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 0 35px;
`;

export const Title = styled.Text`
    color: #022c6f;
    font-size: 18px;
    margin-bottom: 10px;
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


