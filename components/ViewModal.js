import React from 'react';
import { Modal, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Left, Body, Right, Icon, Title, Button } from 'native-base';


const ViewModal = ({showModal, article, onClose}) => {
    
    const handleClose = () => {
        return onClose();
    }


    const handleShare = () => {
        const { url, title } = article
        message = `${title}\n\nRead More @${url}\n\nShared via NewsApp`;
        return Share.share(
            {title, message, url:message},
            {dialogTitle:`Share ${title}`}
        );
    }

    return (
        <Modal animationType='slide' transparent visible={showModal} onRequestClose={handleClose}>
            <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#009387'}}>
                    <Left>
                    <Button onPress={handleShare} transparent>
                        <Icon type="FontAwesome" name='share' color='white' fontSize={12} />
                        </Button>
                    </Left>
                    <Body>
                        <Title children={article.title} style={{color:'white'}} />
                    </Body>
                    <Right>
                        <Button onPress={handleClose} transparent>
                        <Icon type="FontAwesome" name='close' color='white' fontSize={12} />
                        </Button>
                    </Right>
                </Header>    
                    <WebView source={{uri:article.url}} style={{flex:1}} onError={handleClose}/>
            </Container>
        </Modal>
    );
}


export default ViewModal;