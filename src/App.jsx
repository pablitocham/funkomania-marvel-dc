import './App.css'

import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import LogoMD from './assets/Img/logoMD.png'
import ItemListContainer from './Components/NavBar/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <NavBar logo={LogoMD} />
      <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  )
}

export default App


