import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default function ToggleableTimerForm({ isOpen }) {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" />}
    </View>
  );
}

ToggleableTimerForm.propTypes = {
  isOpen: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});
