import './App.css'
import './components/Layout'
import Layout from './components/Layout'
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core'
import Toogle from './toogle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <div className="App">
          <Layout />
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
