import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BasicSelect from './components/BaseSelect';
import SelectBox from './components/SelectBox';
import { Route, Routes } from 'react-router-dom';

// Tuple: fix elements, [string, number] => ["Pham Van Hoan", 20]
// Enum: 
enum Permission {
  ADMIN,
  EDITOR,
  MODERATOR
}
// Any: use some case
// Union: Switch two types 




const reviews: {name: string; age: number; contact: [number, string]; permission: number}[] = [{
  name: "Phạm Văn Hoàn",
  age: 23,
  contact: [245445545, 'phamhoan879@gmail.com'],
  permission: Permission.ADMIN
},
{
  name: "Nguyễn Hà Anh",
  age: 22,
  contact: [194567890, 'nguyenhaanh091100@gmail.com'],
  permission: Permission.MODERATOR
}
]

const user : { firstName: string; lastName: string; age: number; isStudent: boolean, school: (string|number)[], scores: number[]} = {
  firstName: "Tran",
  lastName: "Anh Tuan",
  age: 29,
  isStudent: true,
  school: ["Ha Noi University of Industry"],
  scores: [9, 10, 7]
}

function App() {
  
  const [count, setCount] = useState(0)
  function viewInfo(name: string, age?: number) {
    return  <h1>{name} + {age}</h1>
  }  
  return (
    <>
    <Routes>
      <Route path="/" element={ <SelectBox />}/>
      <Route path="/home" element={ <h1> Pham Van Hoan </h1>}/>
    </Routes>
      {/* <BasicSelect/> */}
    </>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   {viewInfo(reviews[0].name, reviews[0].age)}
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
