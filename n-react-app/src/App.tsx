import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  ListGroup from './components/ListGroup';
import  Alert from './components/Alert';

function App() {
  /* 
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    const handleSelectedItem = (item: string) => {
      console.log(item);
    }
    const [count, setCount] = useState(0)
    return <div><ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/></div> 
  */

    return (
        <div>
          <Alert>
            Hello World
          </Alert>
        </div>
    );
}

export default App
