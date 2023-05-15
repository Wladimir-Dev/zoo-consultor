import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormAnimal } from '../FormAnimal'
import { useZoo } from '../../hooks/useZoo'
import AddIcon from '@mui/icons-material/Add';
import { ListOfAnimals } from '../ListOfAnimals'
import { ButtonAdd, Title } from './styles'
import { Alert, Button, Snackbar } from '@mui/material';
import { AddedObj } from '../../types';
import { Stack } from '../ListOfZones/styles';

export const DetailsZone = () => {
  const { idZone } = useParams()
  const { zoo } = useZoo()
  const currentZone = zoo.find(item => item.zone == idZone)

  const [addAnimal, setAddAnimal] = useState<AddedObj>({ showForm: false, added: false })
  return (
    <>
      <Stack >
        <Title>Zona de {currentZone?.zone}</Title>
        <Button
          startIcon={<AddIcon />}
          variant='contained'
          sx={{ display: { xs: 'none', sm: 'flex' } }}
          onClick={() => setAddAnimal(prev => ({ ...prev, showForm: true }))}>
          Add Animal
        </Button>
      </Stack>
      {
        currentZone?.animals &&
          currentZone.animals.length == 0
          ? <Title>Sin Animales</Title>
          : <ListOfAnimals animals={currentZone?.animals} />
      }

      <ButtonAdd
        aria-label="add"
        size="large"
        sx={{ display: { xs: 'contain', sm: 'none' } }}
        onClick={() => setAddAnimal(prev => ({ ...prev, showForm: true }))}>
        <AddIcon fontSize="inherit" />
      </ButtonAdd>
      {
        addAnimal.showForm && <FormAnimal setAddAnimal={setAddAnimal} />
      }
      <Snackbar
        open={addAnimal.added}
        anchorOrigin={{ vertical: "top", horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={() => setAddAnimal(prev => ({ ...prev, added: false }))}>
        <Alert
          severity='success'
          variant='filled'
          sx={{ alignItems: 'center', fontSize: '1.5rem' }}>
          Animal Agregado
        </Alert>
      </Snackbar>
    </>
  )
}
