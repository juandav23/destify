import "./App.css"
import Header from "./components/Header"
import Rooms from "./components/Rooms"
import Counter from "./components/Counter"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#20827f",
    },
    secondary: {
      main: "#3579ba",
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="sm">
          <Header className="App-header" />

          <Rooms />
          <Counter />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
