import { Image } from './image.model'

export type Project = {
    id: number
    name: string
    start: Date
    end: Date
    description: string
    images: Image[]
}
