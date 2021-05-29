import React from 'react'
import styled from 'styled-components/native'

const Snackbar = (props) => {

    setTimeout(() => {
        props.onDismiss()
    }, 3000);

    return (
        <Container hasColor={props.hasColor}>
            <CloseContainer onPress={props.onDismiss} activeOpacity={1} />
            <Snack style={{ elevation: 5 }}>
                <Message>{props.message}</Message>
            </Snack>
            <CloseContainer onPress={props.onDismiss} activeOpacity={1} />
        </Container>
    )
}

const Container = styled.View(({ hasColor }) => ({
    flex: 1,
    backgroundColor: hasColor ? 'rgba(0,0,0,0.2)' : null,
    paddingLeft: 20,
    paddingRight: 20
}));

const CloseContainer = styled.TouchableOpacity`
    flex: 1;
`;

const Snack = styled.View`
    align-items: center;
    bottom: 45%;
    background-color: #ad2e24;
    padding: 10px;
    border-radius: 5px;
`;

const Message = styled.Text`
    font-size: 16px;
    color: #FFF;
`;



export default Snackbar
