import { Link } from 'react-router-dom'
import { Paper } from './styles'

interface Props {
  name?: string
}

export const Zone = ({ name }: Props) => {

  return (
    <Paper  >
      <Link to={`/detailsZone/${name}`}>{name}</Link>
    </Paper>
  )
}
