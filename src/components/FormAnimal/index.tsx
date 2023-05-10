import React, { useId } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useParams } from 'react-router-dom'

interface Props {
    showForm: (s: boolean) => void
}
export const FormAnimal = ({ showForm }: Props) => {
    const { species, addAnimal } = useZoo()
    const specieId = useId()
    const nameId = useId()
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
        <form action="" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor={nameId}>Nombre</label>
                <input id={nameId} type="text" name='nameId' placeholder='Juana..' />
            </fieldset>
            <fieldset>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id={specieId}>Especie</InputLabel>
                        <Select id={specieId} label="Especie" name='specieId' defaultValue=''>
                            {
                                species.map(specie => <MenuItem key={specie} value={specie}>{specie}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Box>
            </fieldset>
            <Button variant="contained" type='submit'>Guardar</Button>
        </form>
    )
}
