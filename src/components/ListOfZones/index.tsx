import { useState } from 'react'
import { Zone } from '../Zone'
import { FormZone } from '../FormZone'
import { useZoo } from '../../hooks/useZoo'
import Grid from '@mui/material/Unstable_Grid2'
import AddIcon from '@mui/icons-material/Add';
import { ButtonAdd, ContainerGrid, ContainerZones, Stack, Title } from './styles'
import { Alert, Button, Snackbar, } from '@mui/material'
import { AddedObj } from '../../types'


export const ListOfZones = () => {
  const { zoo } = useZoo()

  const [addZone, setAddZone] = useState<AddedObj>({ showForm: false, added: false })

  return (

    <ContainerZones component="section">
      <Stack >
        <Title>Zonas</Title>
        <Button
          startIcon={<AddIcon />}
          variant='contained'
          sx={{ display: { xs: 'none', sm: 'flex' } }}
          onClick={() => setAddZone(prev => ({ ...prev, showForm: true }))}>
          Add Zona
        </Button>
      </Stack>
      <ContainerGrid container spacing={1} columns={{ xs: 12 }} >
        {zoo?.map(item =>
          <Grid key={item.zone} xs={6} sm={4} >
            <Zone name={item.zone} />
          </Grid>)
        }
      </ContainerGrid>

      <ButtonAdd
        aria-label="add"
        size="large"
        sx={{ display: { xs: 'contain', sm: 'none' } }}
        onClick={() => setAddZone(prev => ({ ...prev, showForm: true }))}>
        <AddIcon fontSize="inherit" />
      </ButtonAdd>
      {
        addZone.showForm && <FormZone setAddZone={setAddZone} />
      }
      <Snackbar
        open={addZone.added}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setAddZone(prev => ({ ...prev, added: false }))}>
        <Alert
          severity='success'
          variant='filled'
          sx={{ alignItems: 'center', fontSize: '1.5rem' }}>
          Zona Agregada
        </Alert>
      </Snackbar>
    </ContainerZones>
  )
}
