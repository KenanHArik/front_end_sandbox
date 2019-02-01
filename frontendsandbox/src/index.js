import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import MiniDrawer from './MiniDrawer/MiniDrawer'
import PageContent from './PageContent/PageContent'


const theme = createMuiTheme({ typography: { useNextVariants: true } });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MiniDrawer>
      <PageContent />
    </MiniDrawer>
  </ThemeProvider>,
  document.querySelector("#root")
);


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
