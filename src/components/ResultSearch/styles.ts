import { styled } from '@mui/material'

export const Box = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  margin: '0 auto',
 
  gap: '1rem',
  '&>span': {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  '@media (min-width: 768px)': {
    padding: '0rem 10rem',
  },
  '@media (min-width: 1024px)': {
    padding: '0rem 30rem',
  },
})
