import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainContainer from './app/components/MainContainer';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
const theme = createTheme({
});
const useStyles = makeStyles((theme) => {
  root: {
  }
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme = {theme}>
          <MainContainer />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
