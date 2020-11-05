import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/core'
import InputForm from './InputForm'

const Layout = () => {
  return (
    <div className="layout">
      <Text fontSize="2xl" color="white">
        WEATHER APP & FORECAST
      </Text>
      <Flex align="center" justify="center" flexDirection="column">
        <Box
          bg="white"
          p={5}
          w="50%"
          color="black"
          mt="20px"
          borderRadius="5px"
        >
          <InputForm />
        </Box>
      </Flex>
    </div>
  )
}

export default Layout
