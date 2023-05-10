import { createContext, useEffect, useState } from 'react'
import dataJson from '../mocks/data.json'
import { ZooContextType, Zoo } from '../types'

interface Props {
  children: React.ReactNode;
}

export const ZooContext = createContext<ZooContextType | null>(null)

export const ZooProvider: React.FC<Props> = ({ children }) => {
  const [zoo, setZoo] = useState<Zoo[]>(dataJson)
  const [zones, setZones] = useState<string[]>([])
  const [animals, setAnimals] = useState<string[]>([])

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
    setAnimals(zoo.flatMap(item => item.animals.map(animal => (`${animal.name.toLowerCase()}-${animal.type.toLowerCase()}`))))
  }, [zoo])


  return (
    <ZooContext.Provider value={{ zoo, setZoo, zones, species, animals }}>
      {children}
    </ZooContext.Provider>
  )
}
