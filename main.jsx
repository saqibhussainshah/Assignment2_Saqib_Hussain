import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ListItem from './listItem.jsx'


const root = createRoot(document.getElementById('root'))
const items = ['Red', 'Green', 'Blue', 'Yellow', 'Pink']
const colors = ['red', 'green', 'blue', 'yellow', 'pink']

root.render(
    <StrictMode>
        <ListItem items={items} colors={colors} />
    </StrictMode>
)