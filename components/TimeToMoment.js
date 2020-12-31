import React from 'react';
import moment from 'moment';
import { Text } from 'native-base';


const TimeToMoment = time => {
    const moments = moment( time.time || moment.now() ).fromNow();
    return (
        <Text style={{ marginHorizontal: 10 }} note>{moments}</Text>
    );
}


export default TimeToMoment;