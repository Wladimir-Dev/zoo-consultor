import { createContext, useEffect, useReducer, useState } from 'react'
import dataJson from '../mocks/data.json'
import { ZooContextType, Zoo, Animal, Search, Comment, Action } from '../types'


enum SectionType {
  ZONA = 'ZONA',
  ANIMAL = 'ANIMAL',
  COMENTARIO = 'COMENTARIO',
  CLEAN = 'CLEAN',
}
interface Props {
  children: React.ReactNode;
}
const INITIAL_STATE: Search = {
  zone: '',
  animal: { name: '', type: '', comments: [] },
  comment: { id: '', author: '', createdAt: '', content: '', replies: [] }
}

const reducer = (state: Search, action: Action) => {
  const { type } = action;
  switch (type) {
    case SectionType.ZONA:
      return {
        ...state, zone: action.payload
      }
    case SectionType.ANIMAL:
      return {
        ...state,
        zone: action.payload.zone,
        animal: { ...action.payload.animal }

      }
    case SectionType.COMENTARIO:
      return {
        ...state,
        zone: action.payload.zone,
        animal: action.payload.animal,
        comment: action.payload.comment
      }
    case SectionType.CLEAN:
      return INITIAL_STATE
    default:
      return state
  }
}

export const ZooContext = createContext<ZooContextType | null>(null)

export const ZooProvider: React.FC<Props> = ({ children }) => {
  const [zoo, setZoo] = useState<Zoo[]>(dataJson)

  const [zones, setZones] = useState<string[]>([])
  const [animals, setAnimals] = useState<Animal[]>([])
  const [comments, setComments] = useState<Comment[]>([])


  const [search, dispatch] = useReducer(reducer, INITIAL_STATE)

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
    <ZooContext.Provider value={{ zoo, setZoo, zones, species, animals, comments, search, dispatch }}>
      {children}
    </ZooContext.Provider>
  )
}
