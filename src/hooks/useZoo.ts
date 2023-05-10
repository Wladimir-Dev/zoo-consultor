import { useContext } from 'react'
import { ZooContext } from '../context/ZooContext'
import { Comment, ZooContextType } from '../types'
const NO_FOUND = -1
export const useZoo = () => {
  const { zoo, setZoo, zones, species, animals } = useContext(
    ZooContext
  ) as ZooContextType

  const consultExistence = (name: string, specie?: string) => {
    return specie
      ? animals.includes(`${name}-${specie}`)
      : zones.includes(name.toLowerCase())
  }

  const addZone = (name: string) => {
    if (consultExistence(name)) {
      alert('Esta zona ya existe')
      return false
    }
    setZoo((prev) => [...prev, { zone: name, animals: [] }])
    return true
  }

  const addAnimal = (idZone: string, specie: string, animalName: string) => {
   
    if (consultExistence(animalName, specie)) {
      alert(`Este animal ya se encuentra registrado en una zona`)
      return true
    }

    const indexCurrentZone = zoo.findIndex((item) => item.zone.toLowerCase() == idZone?.toLowerCase())
    if (indexCurrentZone != NO_FOUND) {
      const auxZoo = [...zoo]
      auxZoo[indexCurrentZone].animals.push({
        name: animalName,
        type: specie,
        comments: [],
      })
      setZoo(auxZoo)
    }
    return false
  }

  const addComment = (currentRoute: string, newComment: Comment, topCommentId: string | undefined) => {
    const auxSplit = currentRoute?.split('-')
    const idZone = auxSplit ? auxSplit[0] : ''
    const animalName = auxSplit ? auxSplit[1] : ''
    const type = auxSplit ? auxSplit[2] : ''

    const indexCurrentZone = zoo.findIndex(
      (item) => item.zone.toLowerCase() == idZone?.toLowerCase()
    )
    if (indexCurrentZone != NO_FOUND) {
      const auxZoo = [...zoo]
      const indexCurrentAnimal = zoo[indexCurrentZone].animals.findIndex(
        (animal) =>
          animal.name.toLowerCase() == animalName.toLowerCase() &&
          animal.type.toLowerCase() == type.toLowerCase()
      )
      if (!topCommentId) {
        //no es un comentario tipo respuesta
        auxZoo[indexCurrentZone].animals[indexCurrentAnimal].comments?.push(
          newComment
        )
      } else {
        //busco posicion del comentario a asignar respuesta
        const indexTopComment = zoo[indexCurrentZone].animals[indexCurrentAnimal].comments.findIndex((comment) => comment.id == topCommentId)

        auxZoo[indexCurrentZone].animals[indexCurrentAnimal].comments[indexTopComment].replies?.push(newComment)
      }
      setZoo(auxZoo)
    }
  }
  return {
    zoo,
    setZoo,
    zones,
    addZone,
    species,
    addAnimal,
    addComment,
  }
}