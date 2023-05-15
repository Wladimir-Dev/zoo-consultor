import { Card as CardMUI, CardHeader as CardHeaderMUI, Typography as TypographyMUI, styled } from '@mui/material'

export const Card = styled(CardMUI)({
  minWidth: '19rem',
  marginTop: '1rem',
  '@media (min-width: 600px)': {
    minWidth: '100%',
  }
}) as typeof CardMUI

export const CardHeader = styled(CardHeaderMUI)({
  textTransform: 'capitalize',
  '& .MuiAvatar-colorDefault': {
    backgroundColor: '#065a1e',
  },
  '& span': {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
})
export const Typography = styled(TypographyMUI)({
  fontSize: '1.3rem',
  textTransform: 'capitalize',
  textAlign: 'end',
})
