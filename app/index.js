import React from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';


EStyleSheet.build(
  {
    $primaryBlue: '#4F6D7A',
    $white : '#FFFFFF',
    $borderColor : '#E2E2E2',
    $inputTextColor : '#797979',
    $lightGrey : '#333333',
  },
);

export default () => <Home />;
