export interface IProject {
    id: number,
    name: string,
    start: Date,
    end: Date,
    description: string,
    imageUrls: string[]
}

export class Project implements IProject {
    id: number;
    name: string;
    start: Date;
    end: Date;
    description: string;
    imageUrls: string[];
}
