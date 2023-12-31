import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Box, VStack, Heading, Image } from 'native-base'

interface Props {
  title: string
  image: ImageSourcePropType
  children: React.ReactNode
}

const Masthead = ({ title, image, children }: Props) => {
  return (
    <VStack h="300px" pb={5}>
      <Image
        position="absolute"
        left={0}
        right={0}
        // bottom={-110}
        w="full"
        h="420px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      {children}
      <Box flex={1} />
      <Heading
        color="#F5F5DC"
        p={6}
        size="xl"
        style={{
          textShadowColor: 'black',
          textShadowRadius: 10,
          textShadowOffset: { width: 2, height: 2 }
        }}
      >
        {title}
      </Heading>
    </VStack>
  )
}

export default Masthead
