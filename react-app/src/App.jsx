import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Spinner from './Spinner'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const timeout = async function (milliSecs) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('timeout completed'), milliSecs)
    })
  }

  const handleTimeoutClick = () => {
    setLoading(true);
    timeout(2000)
      .then(result => {
        console.log('timeout result', result);
      })
      .catch(console.warn)
      .finally(() => {
        setLoading(false)
        // after timeout
      })
      // during timeout
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {!!!isLoading && <button onClick={handleTimeoutClick}>
          Timeout now
        </button>}

        {!!isLoading && <Spinner />}
      </div>
    </>
  )
}

export default App
