import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/base-component'
import toast, {Toaster} from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>
)
