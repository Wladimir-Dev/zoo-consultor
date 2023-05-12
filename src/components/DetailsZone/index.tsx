import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormAnimal } from '../FormAnimal'
import { useZoo } from '../../hooks/useZoo'
import AddIcon from '@mui/icons-material/Add';
import { ListOfAnimals } from '../ListOfAnimals'
import { ButtonAdd, Title } from './styles'

export const DetailsZone = () => {
  const { idZone } = useParams()
  const { zoo } = useZoo()
  const [addAnimal, setAddAnimal] = useState<boolean>(false)
  const currentZone = zoo.find(item => item.zone == idZone)
  const showForm = (state: boolean) => {
    setAddAnimal(state)
  }
  return (
    <>
      <section>
        <Title>Zona de {currentZone?.zone}</Title>
        <ListOfAnimals animals={currentZone?.animals} />
      </section>
       <ButtonAdd aria-label="add" size="large" onClick={() => setAddAnimal(prev => !prev)}>
        <AddIcon fontSize="inherit" />
      </ButtonAdd>
      {
        addAnimal && <FormAnimal showForm={showForm} />
      }
    </>
  )
}
