import React,{useState} from 'react'
import Img1 from '../Img/a1.jpg';

const Person = () =>{
    const [personne, setpersonne] = useState({
        Fname:"Rayen Hotmani",
        Bio: "I’ve always had a natural curiosity for machinery. As a child, I loved taking things apart and putting them back together. By the age of 12, I was building components for use in construction and even making a bit of pocket money for my troubles. My passion for machinery continued to develop and I soon obtained a mechanical engineering degree from the Massachusetts Institute of Technology (MIT).",
        Img: Img1,
        Profission:"web developer"
    })
   
    return(
        <>
          <h2 style={{color: "mediumseagreen"}}>{personne.Fname}</h2>
          <img src={Img1} />
          <h3 style={{color: "mediumseagreen"}}>{personne.Profission}</h3>
          <p>{personne.Bio}</p>
        </>
    )
}
export default Person;