import { createContext, useEffect, useState } from 'react'
import dataJson from '../mocks/data.json'
import { ZooContextType, Zoo, Animal, Search, Comment } from '../types'

interface Props {
  children: React.ReactNode;
}

export const ZooContext = createContext<ZooContextType | null>(null)

export const ZooProvider: React.FC<Props> = ({ children }) => {
  const [zoo, setZoo] = useState<Zoo[]>(dataJson)
  const [zones, setZones] = useState<string[]>([])
  const [animals, setAnimals] = useState<Animal[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [search, setSearch] = useState<Search>({
    zone: '',
    animal: { name: '', type: '', comments: [] },
    comment: { id: '', author: '', createdAt: '', content: '', replies: [] }
  })
  const [species] = useState<string[]>([
    'oso',
    'tigre',
    'ballena',
    'avestruz',
    'Pavo Real',
    'Aguila',
    'salmon',
    'pez dorado',
    'tortuga',
    'cocodrilo',
    'serpiente',
    'rana',
    'hormiga',
    'araña',
    'suricato',
    'iguana'
  ])

  useEffect(() => {
    setZones(zoo.map((item) => item.zone.toLowerCase()))
    setAnimals(zoo.flatMap(item => item.animals.map(animal => ({ ...animal }))))
    setComments(zoo.flatMap(item => item.animals.flatMap(animal => animal.comments)))

  }, [zoo])


  return (
    <ZooContext.Provider value={{ zoo, setZoo, zones, species, animals, search, setSearch, comments }}>
      {children}
    </ZooContext.Provider>
  )
}
