import { Link, useParams } from 'react-router-dom'

interface Props {
    name: string
    type: string,
}
export const Animal = ({ name, type}: Props) => {
    const { idZone } = useParams()
    return (
        <Link to={`/detailsAnimal/${idZone}-${name}-${type}`}>
            <span>Nombre: {name} </span>
            <span>Especie: {type}</span>
        </Link>
    )
}
