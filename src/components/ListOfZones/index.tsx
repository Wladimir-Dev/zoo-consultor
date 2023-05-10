import { useState } from 'react'
import { Zone } from '../Zone'
import { ListZones } from './styles'
import { FormZone } from '../FormZone'
import { useZoo } from '../../hooks/useZoo'
export const ListOfZones = () => {
  const { zoo } = useZoo()
  const [addZone, setAddZone] = useState<boolean>(false)
  const showForm = (state: boolean) => {
    setAddZone(state)
  }
  return (
    <section>
      <button onClick={() => setAddZone(prev => !prev)}>Add New Zone</button>
      <ListZones>
        {zoo?.map(item => <li key={item.zone}> <Zone name={item.zone} /></li>)}
      </ListZones>
      {
        addZone && <FormZone showForm={showForm} />
      }
    </section>
  )
}
