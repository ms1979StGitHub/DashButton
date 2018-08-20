import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import moment from 'moment';

import styles from './styles';

const DateText = (props) => {

    const { baseDateText, targetDateText, convertedDate } = props;
 
    return (

        <Text>
            Date {baseDateText} was converted to {targetDateText} to nice format {moment(convertedDate).format('dd.MM.YYYY')}
            </Text>

    );


};

DateText.propTypes = {

    baseDateText: PropTypes.string,
    targetDateText: PropTypes.string,
    convertedDate: PropTypes.object,


};

export default DateText;