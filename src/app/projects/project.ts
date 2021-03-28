import { Image } from './image'

export interface IProject {
    id: number
    name: string
    start: Date
    end: Date
    description: string
    images: Image[]
}

export class Project implements IProject {
    id: number
    name: string
    start: Date
    end: Date
    description: string
    images: Image[]
}
