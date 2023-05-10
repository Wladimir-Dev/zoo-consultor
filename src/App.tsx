import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ListOfZones } from './components/ListOfZones'
import { DetailsZone } from './components/DetailsZone'
import { DetailsAnimal } from './components/DetailsAnimal'
import { ZooProvider } from './context/ZooContext'

function App() {

  return (
    <ZooProvider>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListOfZones />} />
            <Route path='/detailsZone/:idZone' element={<DetailsZone />}></Route>
            <Route path='/detailsAnimal/:idAnimal' element={<DetailsAnimal />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ZooProvider>
  )
}

export default App
