import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './counter.jsx'
import {Counter2} from './component/counter2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Counter2></Counter2>
  </StrictMode>,
)
