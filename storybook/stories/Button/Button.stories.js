import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MyButton from '../../../components/MyButton/';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button with text', () => (
    <MyButton onPress={action('clicked-text')}>
      <Text style={{color: "white"}}>{text('Button text', 'Hello Button')}</Text>
    </MyButton>
  ))

