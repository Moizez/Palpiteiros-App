import React from 'react'
import styled from 'styled-components/native'

const Snackbar = (props) => {

    setTimeout(() => {
        props.onDismiss()
    }, props.time ? props.time : 3000);

    return (
        <Container hasBgColor={props.hasBgColor}>
            <CloseContainer onPress={props.onDismiss} activeOpacity={1} />
            <Snack
                hasColor={props.hasColor}
                hasBottom={props.hasBottom}
            >
                <Message>{props.message}</Message>
            </Snack>
            <CloseContainer onPress={props.onDismiss} activeOpacity={1} />
        </Container>
    )
}

const Container = styled.View(({ hasBgColor }) => ({
    flex: 1,
    backgroundColor: hasBgColor ? 'rgba(0,0,0,0.2)' : null,
    paddingLeft: 20,
    paddingRight: 20
}));

const CloseContainer = styled.TouchableOpacity`
    flex: 1;
`;

const Snack = styled.View(({ hasColor, hasBottom }) => ({
    alignItems: 'center',
    bottom: hasBottom ? hasBottom : '45%',
    backgroundColor: hasColor ? hasColor : '#ad2e24',
    padding: 10,
    borderRadius: 5,
    elevation: 5
}));

const Message = styled.Text`
    font-size: 16px;
    color: #FFF;
`;



export default Snackbar
