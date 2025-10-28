import prathSir from '../assets/images/PrathmeshSir.png'
import ashuSir from '../assets/images/ashutoshSir.jpeg'
import chetanSir from '../assets/images/chetanSir.jpeg'
import manojSir from '../assets/images/manojSir.jpeg'
import vedant from '../assets/images/vedant.jpg'
import jagadeesh from '../assets/images/jagdishSukant.jpg'

export interface teams{
    id:string,
    img:string,
    name:string,
    profession:string
    linkedIn:string
}

export const teamsData : teams[] = [
    {
        id:'id1',
        img:prathSir,
        name:"Prathmesh Kant",
        profession:"CEO & Co-founder",
        linkedIn:"https://www.linkedin.com/in/prathmesh-kant-2120251/"
    },
    {
        id:'id2',
        img:ashuSir,
        name:"Ashutosh Mishra",
        profession:"Co-founder",
        linkedIn:"https://www.linkedin.com/in/ashutosh-mishra-3240b68/"
    },
    {
        id:'id3',
        img:chetanSir,
        name:"Chetan Suvarna",
        profession:"Co-founder",
        linkedIn:"https://www.linkedin.com/in/chetan-suvarna-9134b41b/"
    },
    {
        id:'id4',
        img:manojSir,
        name:"Manoj Suvarna",
        profession:"Co-founder",
        linkedIn:"https://www.linkedin.com/in/manojsuvarna/"
    },
    {
        id:'id5',
        img:jagadeesh,
        name:"Jagadeesh Sunkad",
        profession:"Advisor",
        linkedIn:"https://www.linkedin.com/in/jagadeeshsunkad/"
    },
    {
        id:'id6',
        img:vedant,
        name:"Vedant Jhaver",
        profession:"Advisor",
        linkedIn:"https://www.linkedin.com/in/vedantjhaver/"
    },
    // {
    //     id:'id5',
    //     img:'https://api.dicebear.com/7.x/avataaars/svg?seed=user55',
    //     name:"Gemmi Rose",
    //     profession:"Co-founder"
    // },
    // {
    //     id:'id6',
    //     img:'https://api.dicebear.com/7.x/avataaars/svg?seed=user66',
    //     name:"john beck",
    //     profession:"Co-founder"
    // },
    // {
    //     id:'id7',
    //     img:'https://api.dicebear.com/7.x/avataaars/svg?seed=user77',
    //     name:"Neo Joe",
    //     profession:"Co-founder"
    // },
    // {
    //     id:'id8',
    //     img:'https://api.dicebear.com/7.x/avataaars/svg?seed=user8',
    //     name:"Geman Rodd",
    //     profession:"Co-founder"
    // },
    // {
    //     id:'id9',
    //     img:'https://api.dicebear.com/7.x/avataaars/svg?seed=user9',
    //     name:"Belly gaurd",
    //     profession:"Co-founder"
    // },
    
]