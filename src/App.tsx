import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const reviews = [{
  name: "Phạm Văn Hoàn",
  age: 23
},
{
  name: "Nguyễn Hà Anh",
  age: 22
}
]

function App() {
  const [count, setCount] = useState(0)
  function viewInfo(name: string, age?: number) {
    return  <h1>{name} + {age}</h1>
  }  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {viewInfo(reviews[0].name, reviews[0].age)}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
