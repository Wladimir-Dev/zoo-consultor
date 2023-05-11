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
  setSearch: React.Dispatch<React.SetStateAction<Search>>
}
