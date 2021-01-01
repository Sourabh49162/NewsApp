import React from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';

const MyHeader = data => {

    return (
        <Header style={{ backgroundColor: '#009387' }} hasTabs >
            <Left />
            <Body>
                <Title>{data.data}</Title>
            </Body>
            <Right >
            <Button onPress={logout} transparent>
                <Icon type="FontAwesome" name='logout' color='white' fontSize={12} />
                </Button>
            </Right>
        </Header>
    );
}


export default MyHeader;