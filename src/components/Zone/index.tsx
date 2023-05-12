import { Link } from 'react-router-dom'
import { Carta } from './styles'
interface Props {
  name?: string
}

export const Zone = ({ name }: Props) => {

  return (
    <Carta  >
      <Link to={`/detailsZone/${name}`}>{name}</Link>
    </Carta>
  )
}
