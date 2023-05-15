import React, { useState } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { ButtonClose, Form, InputZone, Button, Title } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Snackbar, Stack } from '@mui/material';
import { AddedObj } from '../../types';

interface Props {
  setAddZone: React.Dispatch<React.SetStateAction<AddedObj>>
}
export const FormZone = ({ setAddZone }: Props) => {
  const { addZone } = useZoo()
  const [successZone, setSuccessZone] = useState<boolean>(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nameZone = e.currentTarget.zoneName.value

    if (!nameZone.trim()) return

    const auxSuccessZone = addZone(nameZone)
    setSuccessZone(auxSuccessZone)
    auxSuccessZone && setAddZone({ showForm: false, added: true })
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
      <ButtonClose onClick={() => setAddZone(prev => ({ ...prev, showForm: false }))} >
        <CloseIcon />
      </ButtonClose>

      <Snackbar
        open={!successZone}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setSuccessZone(prev => !prev)}>
        <Alert severity='error' sx={{ alignItems: 'center', fontSize: '1.5rem' }}>
          Esta Zona ya Existe
        </Alert>
      </Snackbar>
    </Form>
  )
}
