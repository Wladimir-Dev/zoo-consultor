import { Box, IconButton, styled, Stack as StackMUI } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export const ContainerZones = styled(Box)({
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
export const Title = styled('h2')({
  color: 'white',
  textAlign: 'center',
  fontSize: '2.2rem',
})
export const ButtonAdd = styled(IconButton)({
  color: 'white',
  backgroundColor: '#065a1e',
  position: 'absolute',
  bottom: '4rem',
  right: '3rem',
  '&: hover': {
    backgroundColor: '#065a1e',
  },
})

export const ContainerGrid = styled(Grid2)({
  minWidth: '30rem',
  justifyContent: 'center',
  '@media (min-width: 600px)': {
    minWidth: '40rem',
  },
})

export const Stack = styled(StackMUI)({
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap: '5rem',
  marginBlock: '2rem',
  '& Button': {
    textTransform: 'capitalize',
    fontFamily: 'inherit',
    color: 'white',
    backgroundColor: '#065a1e',
    '&: hover': {
      backgroundColor: '#065a1e',
    },
  },
})
