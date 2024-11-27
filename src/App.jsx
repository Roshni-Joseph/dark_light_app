import { useState } from 'react'
import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './Context'

function App() {
  // const [count, setCount] = useState(0)
  const {currentTheme,changeTheme} = useContext(ThemeContext);

  const handleChangeTheme = () =>{
    changeTheme();
  }


  return (
    <>
      <div className='App'>
        {currentTheme === 'light' ? (
          <div className='light_container'>
            <label>Toggle Theme</label>
            <input type="checkbox" onChange={() => handleChangeTheme()} />
            <h3>This is light theme</h3>
          </div>
        ):(
          <div className='dark_container'>
            <label>Toggle Theme</label>
            <input type="checkbox" onChange={() => handleChangeTheme()} />
            <h3>This is dark theme</h3>
          </div>
        )}

      </div>
    </>
  )
}

export default App
