import { Project } from '../projects/types/project'

const projects: Project[] = [
    {
        id: 0,
        name: 'case study 001',
        description: 'design build project at the university of arizona, images curtesy of Rachael Varin.',
        images: [
            {
                src: '/assets/images/case_study_001/front.jpg',
                alt: 'case study 001 front image',
                width: 2016,
                height: 1512,
            },
            {
                src: '/assets/images/case_study_001/external.jpg',
                alt: 'case study 001 external image',
                width: 2016,
                height: 1512,
            },
            {
                src: '/assets/images/case_study_001/detail.jpg',
                alt: 'case study 001 detail image',
                width: 1512,
                height: 2016,
            },
        ],
    },
    {
        id: 1,
        name: 'trinity site memorial',
        description:
            'this slender monument operates as a ruler to understand the blast radius of a 100-ton atomic bomb. As light enters the space, powerful monuments of reflection occur. Culminating in a solstice sunset lighting a singular tree at the epicenter of the explosion.',
        images: [
            {
                src: '/assets/images/white_sands/top.png',
                alt: 'white sands top image',
                width: 1920,
                height: 1080,
            },
            {
                src: '/assets/images/white_sands/corridor.png',
                alt: 'white sands corridor image',
                width: 1920,
                height: 1080,
            },
            {
                src: '/assets/images/white_sands/room.png',
                alt: 'white sands room image',
                width: 1920,
                height: 1080,
            },
        ],
    },
    {
        id: 2,
        name: 'sanctuary',
        description:
            'project completed for D U S T architects. brief to create a sanctuary in sedona, arizona to operate as a contemplation space.',
        images: [
            {
                src: '/assets/images/sanctuary/skylight.jpg',
                alt: 'sanctuary skylight image',
                width: 1728,
                height: 1152,
            },
            {
                src: '/assets/images/sanctuary/hall.jpg',
                alt: 'sanctuary hall image',
                width: 1728,
                height: 1152,
            },
            {
                src: '/assets/images/sanctuary/overview.jpg',
                alt: 'sanctuary overview image',
                width: 3060,
                height: 1981,
            },
        ],
    },
]

export default projects
