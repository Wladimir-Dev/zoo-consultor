import {  useParams } from 'react-router-dom'
import { Card,Link } from './styles'

interface Props {
    name: string
    type: string,
}
export const Animal = ({ name, type }: Props) => {
    const { idZone } = useParams()
    return (

        <Card >
            <Link to={`/detailsAnimal/${idZone}-${name.toLowerCase()}-${type.toLowerCase()}`}>
                <span>{name} </span>
                <span>{type}</span>
            </Link>
        </Card>


    )
}
