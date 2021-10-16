import { Image } from './image.model'

export interface Project {
    id: number
    name: string
    start: Date
    end: Date
    description: string
    images: Image[]
}
