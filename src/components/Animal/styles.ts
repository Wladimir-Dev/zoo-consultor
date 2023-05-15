import { Paper, styled } from '@mui/material'
import { Link as LinkR } from 'react-router-dom'
export const Card = styled(Paper)({
  backgroundColor: '#065a1e',
  fontSize: '1.5rem',
  textTransform: 'capitalize',
  textAlign: 'center',
  cursor: 'pointer',
  '& a': {
    color: 'white',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    padding: '20px',
  },
}) as typeof Paper

export const Link = styled(LinkR)({
  display: 'flex',
  flexDirection: 'column',
})
