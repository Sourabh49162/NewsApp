import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import MyHeader from './Header';
import MyTab from './Tab';
const Home = () => {
    return (
        <Container>
            <MyHeader data='Home' />
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