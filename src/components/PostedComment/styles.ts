import { Card, CardHeader, Typography, styled } from '@mui/material'

export const CommentCard = styled(Card)({
  minWidth:'19rem',
  marginTop:'1rem'
})

export const HeaderCard = styled(CardHeader)({
  textTransform: 'capitalize',
  '& .MuiAvatar-colorDefault': {
    backgroundColor: '#007fff',
  },
  '& span':{
    fontSize: '1.2rem',
    fontWeight:'bold'
  },
})
export const Span = styled(Typography)({
  fontSize: '1.3rem',
  textTransform: 'capitalize',
  textAlign: 'end',
})
