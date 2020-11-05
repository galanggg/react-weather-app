import React from 'react'
import { Box, Flex, Badge, Image } from '@chakra-ui/core'

const WeatherData = ({ forecast, key }) => {
  console.log(forecast)
  return (
    <Flex align="center" justify="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image
          src={`https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`}
        />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" variantColor="teal">
              WEATHER NAME
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {forecast.weather_state_name}
            </Box>
          </Box>
          <Box d="flex" alignItems="baseline" mt={2}>
            <Badge rounded="full" px="2" variantColor="teal">
              Date
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {forecast.applicable_date}
            </Box>
          </Box>
          <Box d="flex" alignItems="baseline" mt={2}>
            <Badge rounded="full" px="2" variantColor="teal">
              TEMP
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {Number(Math.floor(forecast.the_temp))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default WeatherData
