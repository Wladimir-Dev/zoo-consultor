import { Link } from 'react-router-dom'
interface Props {
  name?: string
}

export const Zone = ({ name }: Props) => {

  return (
    <Link to={`/detailsZone/${name}`}>{name}</Link>
  )
}
