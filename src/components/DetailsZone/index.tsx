import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormAnimal } from '../FormAnimal'
import { useZoo } from '../../hooks/useZoo'
import { Button } from '@mui/material'
import { ListOfAnimals } from '../ListOfAnimals'

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
        <h2>zona {currentZone?.zone}</h2>
        <Button onClick={() => setAddAnimal(prev => !prev)} variant="contained">Add Animal +</Button>
        <ListOfAnimals animals={currentZone?.animals} />
      </section>
      {
        addAnimal && <FormAnimal showForm={showForm} />
      }
    </>
  )
}
