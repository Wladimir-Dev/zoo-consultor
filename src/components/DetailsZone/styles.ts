import { IconButton, styled } from "@mui/material";

export const Title = styled('h2')({
    color: 'white',
    textAlign: 'center',
    fontSize: '2.2rem',
    textTransform:'capitalize'
  })
  export const ButtonAdd = styled(IconButton)({
    color: 'white',
    backgroundColor: '#065a1e',
    position: 'absolute',
    bottom: '4rem',
    right: '3rem',
    '&: hover':{
      backgroundColor:'#065a1e'
    }
  })
  