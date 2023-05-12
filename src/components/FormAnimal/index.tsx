import React, { useId } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { ButtonClose, Form, InputZone as InputName, Title } from '../FormZone/styles'
import CloseIcon from '@mui/icons-material/Close';
import { LabelInput, SelectAnm } from './styles'

interface Props {
    showForm: (s: boolean) => void
}
export const FormAnimal = ({ showForm }: Props) => {
    const { species, addAnimal } = useZoo()
    const specieId = useId()
    const { idZone } = useParams()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const specie = e.currentTarget.specieId.value
        const animalName = e.currentTarget.nameId.value

        if (specie == '' || animalName == '') {
            alert('Ambos campos son requeridos')
            return
        }

        if (idZone) {
            const show = addAnimal(idZone, specie, animalName)
            showForm(show)
        }
    }
    return (
        <Form action="" onSubmit={handleSubmit}>
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
                        <SelectAnm id={specieId} label="Especie" name='specieId' defaultValue=''>
                            {
                                species.map(specie =>
                                    <MenuItem key={specie} value={specie}>
                                        {specie}
                                    </MenuItem>
                                )
                            }
                        </SelectAnm>
                    </FormControl>
                </Box>
            </Stack>
            <Button variant="contained" type='submit'>Guardar</Button>
            <ButtonClose onClick={() => showForm(false)} >
                <CloseIcon />
            </ButtonClose>
        </Form>
    )
}
