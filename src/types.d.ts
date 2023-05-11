export enum SectionType {
  ZONA = 'ZONA',
  ANIMAL = 'ANIMAL',
  COMENTARIO = 'COMENTARIO',
  CLEAN = 'CLEAN',
}
export type Action =
  | { type: SectionType.ZONA; payload: string }
  | { type: SectionType.ANIMAL; payload: { zone: string; animal: Animal } }
  | {
      type: SectionType.COMENTARIO
      payload: { zone: string; animal: Animal; comment: Comment }
    }
  | { type: SectionType.CLEAN }

export interface Comment {
  id: string
  author: string
  createdAt: string
  content: string
  replies?: Comment[]
}
export interface Animal {
  name: string
  type: string
  comments: Comment[]
}
export interface Zoo {
  zone: string
  animals: Animal[]
}
export interface Search {
  zone: string
  animal: Animal
  comment: Comment
}
export type ZooContextType = {
  zoo: Zoo[]
  setZoo: React.Dispatch<React.SetStateAction<Zoo[]>>
  zones: string[]
  species: string[]
  animals: Animal[]
  comments: Comment[]
  search: Search
  dispatch
}
