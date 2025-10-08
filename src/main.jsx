import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import App from './App.jsx'
import { ContextApi } from './component/ContextApi.jsx';
import store from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <ContextApi>
    <App />
  </ContextApi>,
  </Provider>
)
