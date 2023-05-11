import { useParams } from 'react-router-dom'

import { ListOfComments } from '../ListOfComments'
import { FormComment } from '../FormComment'
import { useZoo } from '../../hooks/useZoo'

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
        <section>
            <h2>{currentAnimal?.name}</h2>
            <span>{currentAnimal?.type}</span>
            {
                currentAnimal && <ListOfComments comments={currentAnimal.comments} />
            }
            <FormComment />
        </section>
    )
}
