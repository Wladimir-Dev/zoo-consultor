import { useContext } from 'react'
import { ZooContext } from '../context/ZooContext'
import { Comment, ZooContextType, Animal } from '../types'
const NO_FOUND = -1
export const useZoo = () => {
  const { zoo, setZoo, zones, species, animals, search, comments, dispatch } =
    useContext(ZooContext) as ZooContextType

  const consultExistence = (name: string, specie?: string) => {
    return specie
      ? animals.some(
          (animal) =>
            animal.name.toLowerCase() == name.toLowerCase() &&
            animal.type.toLowerCase() == specie.toLowerCase()
        )
      : zones.includes(name.toLowerCase())
  }

  const filterComment = (searchText: string) => {
    return comments
      .filter(
        (comment) =>
          comment.author == searchText || comment.content.includes(searchText)
      )
      .map((newC) => ({
        id: newC.id,
        author: newC.author,
        createdAt: newC.createdAt,
        content: newC.content,
      }))
  }

  const filterReplies = (searchText: string) => {
    return comments
      .map((auxc) => ({
        ...auxc,
        replies: auxc.replies?.filter(
          (rep) => rep.author == searchText || rep.content.includes(searchText)
        ),
      }))
      .filter((item) => item.replies && item.replies?.length > 0)
  }

  const filterAnimals = (searchText: string) => {
    return animals.filter(
      (animal) => animal.name == searchText || animal.type == searchText
    )
  }

  const findAnimal = (idComment: string) => {
    return animals.find((animal) =>
      animal.comments.some((comment) => comment.id == idComment)
    )
  }

  const findZone = (animal: Animal) => {
    const auxZoo = zoo.find((item) =>
      item.animals.some(
        (anmal) =>
          anmal.name.toLowerCase() == animal.name &&
          anmal.type.toLowerCase() == animal.type
      )
    )
    return auxZoo?.zone || ''
  }

  const addZone = (name: string) => {
    if (consultExistence(name)) {
      return false
    }
    setZoo((prev) => [...prev, { zone: name, animals: [] }])
    return true
  }

  const addAnimal = (idZone: string, specie: string, animalName: string) => {
    if (consultExistence(animalName, specie)) return false

    const indexCurrentZone = zoo.findIndex(
      (item) => item.zone.toLowerCase() == idZone?.toLowerCase()
    )
    if (indexCurrentZone != NO_FOUND) {
      const auxZoo = [...zoo]
      auxZoo[indexCurrentZone].animals.push({
        name: animalName,
        type: specie,
        comments: [],
      })
      setZoo(auxZoo)
    }
    return true
  }

  const addComment = (
    currentRoute: string,
    newComment: Comment,
    topCommentId?: string
  ) => {
    const auxSplit = currentRoute?.split('-')
    const idZone = auxSplit[0]
    const animalName = auxSplit[1]
    const type = auxSplit[2]

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
        const indexTopComment = zoo[indexCurrentZone].animals[
          indexCurrentAnimal
        ].comments.findIndex((comment) => comment.id == topCommentId)

        auxZoo[indexCurrentZone].animals[indexCurrentAnimal].comments[
          indexTopComment
        ].replies?.push(newComment)
      }
      setZoo(auxZoo)
    }
  }
  return {
    zoo,
    zones,
    species,
    animals,
    search,
    comments,
    dispatch,
    setZoo,
    addZone,
    addAnimal,
    addComment,
    findZone,
    findAnimal,
    filterComment,
    filterReplies,
    filterAnimals,
  }
}
