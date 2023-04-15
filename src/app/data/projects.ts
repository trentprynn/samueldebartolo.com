import { Project } from '../projects/types/project'

const projects: Project[] = [
    {
        id: 0,
        name: 'case study 001',
        description: 'design build project at the university of arizona, images curtesy of Rachael Varin.',
        images: [
            {
                src: '/assets/images/case_study_001/front_1920_1280.jpg',
                alt: 'case study 001 front image',
                width: 1920,
                height: 1280,
            },
            {
                src: '/assets/images/case_study_001/external_5376_3584.jpg',
                alt: 'case study 001 external image',
                width: 5376,
                height: 3584,
            },
            {
                src: '/assets/images/case_study_001/detail_2172_1448.jpg',
                alt: 'case study 001 detail image',
                width: 2172,
                height: 1448,
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
                src: '/assets/images/white_sands/top_1920_1080.png',
                alt: 'white sands top image',
                width: 1920,
                height: 1080,
            },
            {
                src: '/assets/images/white_sands/corridor_1920_1080.png',
                alt: 'white sands corridor image',
                width: 1920,
                height: 1080,
            },
            {
                src: '/assets/images/white_sands/room_1920_1080.png',
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
                src: '/assets/images/sanctuary/skylight_1728_1152.jpg',
                alt: 'sanctuary skylight image',
                width: 1728,
                height: 1152,
            },
            {
                src: '/assets/images/sanctuary/hall_1728_1152.jpg',
                alt: 'sanctuary hall image',
                width: 1728,
                height: 1152,
            },
            {
                src: '/assets/images/sanctuary/overview_3060_1981.jpg',
                alt: 'sanctuary overview image',
                width: 3060,
                height: 1981,
            },
        ],
    },
]

export default projects
