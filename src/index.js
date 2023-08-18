import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import "@mui/material/styles"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import rootReducer from "./reducers/rootReducer"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
