import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home';
import Appointment from "./Components/AppointmentPage/Appointment";

const theme = createTheme({
  palette: {
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
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
