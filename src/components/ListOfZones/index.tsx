import { useState } from 'react'
import { Zone } from '../Zone'
import { FormZone } from '../FormZone'
import { useZoo } from '../../hooks/useZoo'
import Grid from '@mui/material/Unstable_Grid2'
import AddIcon from '@mui/icons-material/Add';
import { ButtonAdd, ContainerZones, Title } from './styles'
export const ListOfZones = () => {
  const { zoo } = useZoo()
  const [addZone, setAddZone] = useState<boolean>(false)
  const showForm = (state: boolean) => {
    setAddZone(state)
  }
  return (

    <ContainerZones component="section">
      <Title>Zonas</Title>
      <Grid container spacing={1} columns={{ xs: 12 }} sx={{ justifyContent: 'center' }}>
        {zoo?.map(item =>
          <Grid key={item.zone} xs={6}>
            <Zone name={item.zone} />
          </Grid>)
        }
      </Grid>

      <ButtonAdd aria-label="add" size="large" onClick={() => setAddZone(prev => !prev)}>
        <AddIcon fontSize="inherit" />
      </ButtonAdd>
      {
        addZone && <FormZone showForm={showForm} />
      }
    </ContainerZones>
  )
}
