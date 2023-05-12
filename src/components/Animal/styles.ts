import { Paper, styled } from '@mui/material'
import { Link as LinkR } from 'react-router-dom'
export const Card = styled(Paper)({
  backgroundColor: '#007fff',
  fontSize: '1.5rem',
  textTransform: 'capitalize',
  padding: '20px',
  textAlign: 'center',
  minWidth: '12rem',
  cursor: 'pointer',
  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
}) as typeof Paper

export const Link = styled(LinkR)({
  display: 'flex',
  flexDirection: 'column',
})
