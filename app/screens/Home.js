import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/ContainerObjects';
import { Logo } from '../components/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import ReverseButton from '../components/Button/ReverseButton';
import moment from 'moment';

import DateText from '../components/TextTypes/DateText';
import Header from '../components/Header/Header';

const TEMP_BASE_CURRENCY = 'Julian';
const TEMP_QUOTE_CURRENCY = 'Date  ';

const TEMP_BASE_JULIANDATE = '118001';

var today = new Date();

class Home extends Component {


    constructor(props) {
        super(props);

        var formattedDate = moment(today).format('DD.MM.YYYY');

        this.state = {todayText : formattedDate}
        
        }
   

    handlePressBaseCurrency = () => {
        console.log('pressed base currency');
    }

    handlePressQuoteCurrency = () => {
        console.log('pressed quote currency');
    }

    handleJulianDateChange = (text) => {
        console.log('julian date changed', text);
    }

    handleSwapDate = () => {
        console.log('swap date feature pressed');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />

                <Header />
                <Logo />

                <InputWithButton
                    onPress={this.handlePressBaseCurrency}
                    buttonText={TEMP_BASE_CURRENCY}
                    defaultValue={TEMP_BASE_JULIANDATE}
                    keyboardType="numeric"
                    
                />
                <InputWithButton
                    onPress={this.handlePressQuoteCurrency}
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    defaultValue={this.state.todayText}
                     />

                <DateText baseDateText="Julian" targetDateText="Date" convertedDate={this.today} />
                <ReverseButton text="Reverse Date" onPress={this.handleSwapDate} />

            </Container>
        );
    }
}

export default Home;

