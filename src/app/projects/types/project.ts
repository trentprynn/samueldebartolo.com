import { Image } from './image.model'

export type Project = {
    id: number
    name: string
    description: string
    images: Image[]
}
