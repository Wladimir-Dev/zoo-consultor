import Grid from '@mui/material/Unstable_Grid2'
import { type Animal as animal } from '../../types'
import { Animal } from '../Animal'
import { ContainerAnimals } from './styles'
interface Props {
    animals?: animal[]
}

export const ListOfAnimals = ({ animals }: Props) => {
    return (
        <ContainerAnimals>
            <Grid container spacing={2} columns={{ xs: 12 }} sx={{ justifyContent: 'center' }}>
                {
                    animals?.map(animal =>
                        <Grid key={`${animal.name}-${animal.type}`} xs={6}>
                            <Animal {...animal} />
                        </Grid>)

                }
            </Grid>
        </ContainerAnimals>
    )
}
