import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="container mx-auto p-4 w-3/4 bg-blue-400">
      <p className="w-5">你好</p>
    </div>
  )
}

export default App
