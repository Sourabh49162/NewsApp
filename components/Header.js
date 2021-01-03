import React from 'react';
import { Header, Left, Right, Body, Title } from 'native-base';

const MyHeader = data => {

    return (
        <Header style={{ backgroundColor: '#009387' }} hasTabs >
            <Left />
            <Body>
                <Title>{data.data}</Title>
            </Body>
            <Right >
            </Right>
        </Header>
    );
}


export default MyHeader;