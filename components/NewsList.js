import React from 'react';
import { ListItem, Left, Thumbnail, Body, Right, Button, Text, View } from 'native-base';
import TimeToMoment from './TimeToMoment'



const NewsList = ({ data, onPress }) => {

    const handleView = () => {
        const { url, title } = data
        return onPress({url, title});
    }

    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: data.urlToImage }} />
            </Left>
            <Body>
                <Text numberOfLines={2}>{data.title}</Text>
                <Text note numberOfLines={2}>{data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8 }}>
                    <Text note>{data.source.name}</Text>
                    <TimeToMoment time={data.publishedAt} />
                </View>
            </Body>
            <Right>
                <Button onPress={handleView} transparent>
                    <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    );
}


export default NewsList;