import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { StorageService } from "./redux/localStorage";

store.subscribe(
  
  () => StorageService.setItem("REDUX_STORAGE", store.getState())
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
