import React, { useId, useState } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { Alert, Box, FormControl, MenuItem, Snackbar, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Button, ButtonClose, Form, InputZone as InputName, Title } from '../FormZone/styles'
import CloseIcon from '@mui/icons-material/Close';
import { LabelInput, Select } from './styles'
import { AddedObj } from '../../types'

interface Props {
    setAddAnimal: React.Dispatch<React.SetStateAction<AddedObj>>
}
export const FormAnimal = ({ setAddAnimal }: Props) => {
    const { species, addAnimal } = useZoo()
    const specieId = useId()
    const { idZone } = useParams()
    const [successAnimal, setSuccessAnimal] = useState(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const specie = e.currentTarget.specieId.value
        const animalName = e.currentTarget.nameId.value

        if (!specie.trim() || !animalName.trim()) return

        if (idZone) {
            const added = addAnimal(idZone, specie, animalName)
            setSuccessAnimal(added)
            added && setAddAnimal({ showForm: false, added: true })
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Title>Add New Animal</Title>
            <Stack component='fieldset' spacing={1}>
                <InputName
                    id="demo-helper-text-misaligned"
                    label="Animal Name"
                    name='nameId'
                    placeholder='Juana..'
                />
            </Stack>

            <Stack>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <LabelInput id={specieId}>Especie</LabelInput>
                        <Select id={specieId} label="Especie" name='specieId' defaultValue=''>
                            {
                                species.map(specie =>
                                    <MenuItem key={specie} value={specie}>
                                        {specie}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Button variant="contained" type='submit'>Guardar</Button>
            <ButtonClose onClick={() => setAddAnimal(prev => ({ ...prev, showForm: false }))} >
                <CloseIcon />
            </ButtonClose>
            <Snackbar
                open={!successAnimal}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                autoHideDuration={2000}
                onClose={() => setSuccessAnimal(prev => !prev)}
            >
                <Alert severity='error' sx={{ alignItems: 'center', fontSize: '1.5rem' }}>
                    Animal ya Registrado
                </Alert>
            </Snackbar>
        </Form>
    )
}
