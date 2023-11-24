import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export type TimerModes = 'Trabajo' | 'Descanso'

type Props = {
  timerMode: TimerModes
}
export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
  return (
    <View style={styles.timerCountDownContainer}>
      <Text style={styles.timerCountDownText}>
        {timerMode} {timerMode === 'Descanso' ? ' 🥦' : '🍅'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timerCountDownContainer: {
    alignItems: 'center',
    width: '100%'
  },
  timerCountDownText: {
    fontWeight: '800',
    fontSize: 40,
    padding: 15,
    color: '#fff',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 }
  }
})
