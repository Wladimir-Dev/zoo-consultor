import { type Animal as animal } from '../../types'
import { Animal } from '../Animal'
import { SectionAnimals } from './styles'
interface Props {
    animals?: animal[]
}

export const ListOfAnimals = ({ animals }: Props) => {
    return (
        <SectionAnimals>
            {
                animals?.map(animal => <Animal key={`${animal.name}-${animal.type}`} {...animal} />)
            }
        </SectionAnimals>
    )
}
