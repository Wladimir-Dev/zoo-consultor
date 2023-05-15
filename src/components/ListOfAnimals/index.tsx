import Grid from '@mui/material/Unstable_Grid2'
import { type Animal as animal } from '../../types'
import { Animal } from '../Animal'
import { ContainerGrid } from '../ListOfZones/styles'
import { Box } from '@mui/material'
interface Props {
    animals?: animal[]
}

export const ListOfAnimals = ({ animals }: Props) => {
    return (
        <Box>
            <ContainerGrid container spacing={1} columns={{ xs: 12 }} >
                {
                    animals?.map(animal =>
                        <Grid key={`${animal.name}-${animal.type}`} xs={6} sm={4} >
                            <Animal {...animal} />
                        </Grid>)

                }
            </ContainerGrid>
        </Box>
    )
}
