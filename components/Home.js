import React from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Body, Title } from 'native-base';
import MyTab from './Tab';
const Home = () => {
    return (
        <Container>
            <Header style={{backgroundColor:'#009387'}} hasTabs >
                <Left />
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right />
            </Header>
            <Tabs>
                <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
                    <MyTab category="general" />
                </Tab>
                <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
                    <MyTab category="business" />
                </Tab>
                <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
                    <MyTab category="technology" />
                </Tab>
            </Tabs>
        </Container>
    );
}


export default Home;