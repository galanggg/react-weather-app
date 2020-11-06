import React, { useEffect, useState } from 'react'
import WeatherData from './WeatherData'
import { Box, Spinner } from '@chakra-ui/core'
import axios from 'axios'

const Weather = ({ weather }) => {
  const [data, setData] = useState([])
  const [showData, setShowData] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${weather[0].woeid}`,
      )
      const results = await response.data
      setData(results)
      setShowData(true)
    } catch (e) {
      setError(true)
      throw new Error(`Error !!!`)
    }
  }
  useEffect(() => {
    fetchData()
    //eslint-disable-next-line
  }, [weather])

  const forecast = data.consolidated_weather
  console.log(forecast)

  if (!showData) {
    return (
      <Box mt={2}>
        <Spinner />
      </Box>
    )
  } else {
    return (
      <Box mt={5}>
        {forecast.map((data, idx) => (
          <WeatherData forecast={data} key={idx} />
        ))}
      </Box>
    )
  }
}

export default Weather
