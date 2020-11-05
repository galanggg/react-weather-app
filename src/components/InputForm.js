import React from 'react'
import Weather from './Weather'
import axios from 'axios'
import { Box, Input, Button, FormControl, Flex } from '@chakra-ui/core'

const InputForm = () => {
  const [data, setData] = React.useState([])
  const [location, setLocation] = React.useState('')
  const [show, setShow] = React.useState(false)

  const onChange = (e) => {
    setLocation(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`,
    )
    const locationResults = await response.data
    setData(locationResults)
    setShow(true)
  }
  return (
    <>
      <FormControl>
        <Flex flexDirection="row" align="center" justify="center">
          <Box>
            <Input
              variant="outline"
              placeholder="Input the City (Denpasar)"
              size="lg"
              focusBorderColor="pink.400"
              value={location}
              onChange={onChange}
            />
          </Box>
          <Button
            backgroundColor="#fbb13c"
            size="md"
            type="submit"
            onClick={handleSubmit}
            marginLeft={10}
          >
            Search
          </Button>
        </Flex>
      </FormControl>
      {show ? <Weather weather={data} /> : null}
    </>
  )
}

export default InputForm
