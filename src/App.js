import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home';
import Header from './Shared/Header/Header';

const theme = createTheme({
  palette: {
    // mode: "",
    primary: {
      main: "#2BDCCE",
    },
    secondary: {
      main: "#3A4256",
    },
    info: {
      main: "#B8B8B8",
    },
  },
  // background: {
  //   default: "#222222",
  //   paper:"#101620"
  // },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
