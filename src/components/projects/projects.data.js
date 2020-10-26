const ProjectsData = [
    {
        id:1,
        name:"Sorting Visualizer",
        image:"/img/developer.jpg",
        description:"Description",
        url_video:'https://www.youtube.com/embed/o2dXxerxiug',
        technologies:[
            {
                id: 1,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/angularjs.svg alt=angular />`
            },
            {
                id: 2,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/typescript.svg alt=angular />`
            },
            {
                id: 3,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/css3.svg alt=angular />`
            }
        ]
    },
    {
        id:2,
        name:"Sodoku",
        image:"/img/chess.jpg",
        description:"Description",
        url_video:'https://www.youtube.com/embed/T0ZmErXkbxE',
        technologies:[
            {
                id: 1,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/react-native.svg alt=angular />`
            },
            {
                id: 2,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/javascript.svg alt=angular />`
            }
        ]
    },
    {
        id:3,
        name:"Affiliate Store",
        image:"/img/guitar.png",
        description:"Description",
        url_video:'https://www.youtube.com/embed/lhg9bYNLvOg',
        technologies:[
            {
                id: 1,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/html-5.svg alt=angular />`
            },
            {
                id: 2,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/css3.svg alt=angular />`
            },
            {
                id: 3,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/php.svg alt=angular />`
            },
            {
                id: 4,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/mysql.svg alt=angular />`
            },
            {
                id: 5,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/bootstrap.svg alt=angular />`
            }
        ]
    },
    {
        id:4,
        name:"Image Analyzer",
        image:"/img/videogames.jpg",
        description:"Description",
        url_video:'https://www.youtube.com/embed/IGLVMBTIAPE',
        technologies:[
            {
                id: 1,
                html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/c-sharp.svg alt=angular />`
            }
        ]
    },

];

export default ProjectsData;