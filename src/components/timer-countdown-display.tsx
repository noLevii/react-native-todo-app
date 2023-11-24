import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  countDownDate: Date
}

export const TimerCountDownDisplay: React.FC<Props> = ({ countDownDate }) => {
  return (
    <View>
      <Text style={styles.timerCountDownText}>
        {countDownDate.getMinutes().toString().padStart(2, '0')}:
        {countDownDate.getSeconds().toString().padStart(2, '0')}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
