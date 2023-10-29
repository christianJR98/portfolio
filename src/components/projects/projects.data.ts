const ProjectsData = [
  {
    id: 1,
    name: "Ecommerce",
    image: "/img/projects/ecommerce.png",
    code: "https://github.com/christianJR98/mern-ecommerce",
    app: " https://proshop123.herokuapp.com",
    url_video: null, // 'https://www.youtube.com/embed/o2dXxerxiug'
    description: `<p>I created this project to learn the MERN stack and how to integreate payments</p>
        <p class='description-modal-emphasis'>what i learned?</p>
        <ul>
            <li>React</li>
            <li>Use Redux to manage the state</li>
            <li>Use NodeJs and express to create the backend</li>
            <li>Store information in mongoDB</li>
            <li>Integrate payments using the paypal API</li>
            <li>User authentication</li> 
        </ul>
        `,
    technologies: [
      {
        id: 1,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/react-native.svg alt=react />`,
      },
      {
        id: 2,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/nodejs.svg alt=Node />`,
      },
      {
        id: 3,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/mongodb.svg alt=MongoDB />`,
      },
      {
        id: 4,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/heroku.svg alt=Heroku />`,
      },
      {
        id: 5,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/bootstrap.svg alt=bootstrap />`,
      },
    ],
  },
  {
    id: 2,
    name: "Affiliate Store",
    image: "/img/projects/affiliate-store.png",
    code: "https://github.com/christianJR98/regalos-de-musica",
    app: " http://musicgifts.atwebpages.com",
    url_video: null,
    description: `<p>I created this project to learn php and sql</p>
        <p class='description-modal-emphasis'>what i learned?</p>
        <ul>
            <li>How to use PHP</li>
            <li>Design Relational databases</li>    
            <li>Create queries to get information from the database</li>    
            <li>Use the MVC model to structure the App</li>
            <li>Integrate google analytics</li> 
        </ul>
        `,
    technologies: [
      {
        id: 1,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/html-5.svg alt=angular />`,
      },
      {
        id: 2,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/css3.svg alt=angular />`,
      },
      {
        id: 3,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/php.svg alt=angular />`,
      },
      {
        id: 4,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/mysql.svg alt=angular />`,
      },
      {
        id: 5,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/bootstrap.svg alt=angular />`,
      },
    ],
  },
  {
    id: 3,
    name: "Image Analyzer",
    image: "/img/projects/image-analyzer.png",
    code: "https://github.com/christianJR98/image-analyzer",
    app: null,
    url_video: null,
    description: `<p>I created this project in my algorithm class to learn C# and understand graphs and related algorithms</p>
        <p class='description-modal-emphasis'>what i learned?</p>
        <ul>
            <li>How to use C#</li>
            <li>Create UI</li>
            <li>Use events to activate functions</li>
            <li>Analyze an image</li>
            <li>Implement the DDA algorithm to create and analyze pixel lines</li>
            <li>Understand and implement a dinamic graph</li>
            <li>Implement Prim and Kruskal</li>
            <li>Implement DFS and BFS</li> 
            <li>Implement Dijkstra and Floyd Warshall</li> 
            <li>Create a game on the graph</li>
        </ul>
        `,
    technologies: [
      {
        id: 1,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/c-sharp.svg alt=angular />`,
      },
    ],
  },
  {
    id: 4,
    name: "Sorting Visualizer",
    image: "/img/projects/sorting-visualizer.png",
    code: "https://github.com/christianJR98/sorting-visualizer",
    app: "https://christianjr98.github.io/sorting-visualizer",
    url_video: null,
    description: `<p>I created this project because i want to saw how a sorting algorithm works and understand them better</p>
        <p class='description-modal-emphasis'>what i learned?</p>
        <ul>
            <li>Angular project structure and data flow</li>
            <li>Create components with the CLI</li>
            <li>How to share information between components</li>
            <li>Difference between share information with binding and services</li>
            <li>Use the subscribe method to trigger functions when a variable change</li>
            <li>Create animations on javascript</li>
            <li>Implement Bubble Sort, Selection sort and Quicksort</li>
        </ul>
        `,
    technologies: [
      {
        id: 1,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/angularjs.svg alt=angular />`,
      },
      {
        id: 2,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/typescript.svg alt=angular />`,
      },
      {
        id: 3,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/css3.svg alt=angular />`,
      },
    ],
  },
  {
    id: 5,
    name: "Bienes Raices",
    image: "/img/projects/bienes-raices.png",
    code: "https://github.com/christianJR98/bienes-raices",
    app: "https://christianjr98.github.io/bienes-raices",
    url_video: null,
    description: `<p>I created this project with the objective to learn html, css and javascript</p>
            <p class='description-modal-emphasis'>what i learned?</p>
            <ul>
                <li>html tags</li>
                <li>how to create a link between html and css</li>
                <li>style elements</li>
                <li>position elements using flexbox</li>
                <li>responsive design</li>
                <li>basic JS</li>
            </ul>
            `,
    technologies: [
      {
        id: 1,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/html-5.svg alt=HTML />`,
      },
      {
        id: 2,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/css3.svg alt=CSS3 />`,
      },
      {
        id: 3,
        html: `<img src=${process.env.PUBLIC_URL}/img/tech-icons/javascript.svg alt=JS />`,
      },
    ],
  },
];

export default ProjectsData;
