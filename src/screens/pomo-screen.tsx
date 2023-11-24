import React, { useState, useEffect } from 'react'
import { ScrollView, Text, VStack, useColorModeValue } from 'native-base'
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import AnimatedColorBox from '../components/animated-color-box'
import { TimerCountDownDisplay } from '../components/timer-countdown-display'
import { TimerModeDisplay, TimerModes } from '../components/timer-mode-display'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'

const screen = Dimensions.get('window')
const FOCUS_TIME_MINUTES = 25 * 60 * 1000 // 25 minutes
const BREAK_TIME_MINUTES = 5 * 60 * 1000 // 5 minutes

export default function PomodoroScreen() {
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null)
  const [timerMode, setTimerMode] = useState<TimerModes>('Trabajo')
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === 'Trabajo') {
        setTimerMode('Descanso')
        setTimerCount(BREAK_TIME_MINUTES)
      } else {
        setTimerMode('Trabajo')
        setTimerCount(FOCUS_TIME_MINUTES)
      }
      stopCountDown()
    }
  }, [timerCount])

  const startCountDown = () => {
    setIsTimerRunning(true)
    const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000)
    setIntervalId(id)
  }

  const stopCountDown = () => {
    setIsTimerRunning(false)
    if (intervalId) {
      clearInterval(intervalId)
    }
    setIntervalId(null)
  }
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead title="Pomodoro" image={require('../assets/pomodoro1.jpeg')}>
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4} alignItems="center" justifyContent="center">
          {
            <View
              style={{
                ...styles.container
              }}
            >
              <TimerModeDisplay timerMode={timerMode} />

              <TouchableOpacity
                onPress={isTimerRunning ? stopCountDown : startCountDown}
                style={[
                  styles.button,
                  {
                    borderColor:
                      timerMode === 'Descanso' ? '#287233' : '#de2303'
                  }
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: timerMode === 'Descanso' ? '#287233' : '#d32303' }
                  ]}
                >
                  {isTimerRunning ? 'Pausa' : 'Empezar'}
                </Text>
              </TouchableOpacity>

              <TimerCountDownDisplay countDownDate={new Date(timerCount)} />
            </View>
          }
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderWidth: 10,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 22
  },
  timerText: {
    color: '#FF851B',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15
  }
})
