import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./context/appContext";
import App from "./App";
import './index.css'
import'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './asstes/css/mdb.css'









ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,

  document.getElementById("root")
);
