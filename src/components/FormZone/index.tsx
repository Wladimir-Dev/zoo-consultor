import React, { useId } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { ButtonClose, Form, InputZone, Button, Title } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, TextField } from '@mui/material';

interface Props {
  showForm: (state: boolean) => void;
}

export const FormZone = ({ showForm }: Props) => {
  const { addZone } = useZoo()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const added = addZone(e.currentTarget.zoneName.value)
    added && showForm(false)
  }

  return (


    <Form action="" onSubmit={handleSubmit}>
      <Title>Add New Zone</Title>
      <Stack component='fieldset' spacing={1}>

        <InputZone
          id="demo-helper-text-misaligned"
          label="Name"
          name='zoneName'
        />
      </Stack>


      <Button type='submit' variant='contained'>Guardar Zona</Button>
      <ButtonClose onClick={() => showForm(false)} >
        <CloseIcon />
      </ButtonClose>
    </Form>
  )
}
