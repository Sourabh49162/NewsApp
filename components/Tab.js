import React, { useState, useEffect } from 'react';
import { Container, Header, Content, List } from 'native-base';
import { View, Text, ActivityIndicator } from 'react-native'
import NewsList from './NewsList';
import axios from 'axios';
// import NewsApi from './../config/NewsApi';
import ViewModal from './ViewModal';
import { base_url, country_code, api_key } from './../config/RestAPIConfig';

const MyTab = data => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [article, setAtricle] = useState({});

    const viewClick = articleData => {
        setModalVisibility(true);
        setAtricle(articleData)
    }

    const closeModal = () => {
        setModalVisibility(false);
        setAtricle({});
    }

    const NewsApi = category => {
        axios.get(`${base_url}${country_code}&category=${category}`, { headers: { 'X-API-KEY': api_key } }).then(
            response => {
                setNews(response.data.articles);
                setIsLoading(false);
            }, error => {
                return 'No Data Found! Some Error!';
            }
        );
    }

    let view = isLoading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color='#009387' size='large' animating={isLoading} />
            <Text>Please Wait...</Text>
        </View>
    ) : (
            <Content>
                <List dataArray={news} renderRow={item => <NewsList onPress={viewClick} data={item} />} />
            </Content>
        )

    useEffect(() => {
        NewsApi(data.category);
    }, []);

    return (
        <Container>
            {view}
            <ViewModal showModal={modalVisibility} article={article} onClose={closeModal} />
        </Container>
    );
}


export default MyTab;