import { useEffect } from 'react'
import start from './games/demo/game'

function App() {
  useEffect(() => {
    start()
  }, [])
  return <div id="game"></div>
}

export default App
