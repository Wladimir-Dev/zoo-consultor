import { useParams } from 'react-router-dom'

import { ListOfComments } from '../ListOfComments'
import { FormComment } from '../FormComment'
import { useZoo } from '../../hooks/useZoo'
import { Title } from '../FormZone/styles'
import { Stack, Box } from './styles'

export const DetailsAnimal = () => {
    const { zoo } = useZoo()
    const { idAnimal } = useParams()
    const auxSplit = idAnimal?.split('-')
    const idZone = auxSplit ? auxSplit[0] : ''
    const name = auxSplit ? auxSplit[1] : ''
    const type = auxSplit ? auxSplit[2] : ''

    const currentZone = zoo.find(item => item.zone == idZone)
    const currentAnimal = currentZone?.animals.find(animal => (animal.name.toLowerCase() == name && animal.type.toLowerCase() == type))
    return (
        <Stack component='section' spacing={6}>
            <Title>{currentAnimal?.name}-{currentAnimal?.type}</Title>
            {
                currentAnimal && <ListOfComments comments={currentAnimal.comments} />
            }
            <Box >
                <FormComment />
            </Box>
        </Stack>
    )
}
