import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListOfZones } from './components/ListOfZones'
import { DetailsZone } from './components/DetailsZone'
import { DetailsAnimal } from './components/DetailsAnimal'
import { ZooProvider } from './context/ZooContext'
import { ResultSearch } from './components/ResultSearch'
import { Search } from './components/Search'
import { Container } from './AppStyles'

function App() {

  return (
    <ZooProvider>
      <Container>
        <BrowserRouter>
          <Search />
          <Routes>
            <Route path='/' element={<ListOfZones />} />
            <Route path='/detailsZone/:idZone' element={<DetailsZone />}></Route>
            <Route path='/detailsAnimal/:idAnimal' element={<DetailsAnimal />}></Route>
            <Route path='/resultSearch' element={<ResultSearch />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>

    </ZooProvider>
  )
}

export default App
