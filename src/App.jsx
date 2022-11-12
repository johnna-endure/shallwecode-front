import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Sample from "./Sample.jsx";
import Login from './pages/Login.jsx'

function App() {

    // const onChange =() => {
    //     console.log('dkdkdkdk')
    // }
    //
    // const name = '허허'

  return (
    <div className="App">
        <Login/>
        {/*<Sample onChange={onChange} name={name}/>*/}
    </div>
  )
}

export default App
