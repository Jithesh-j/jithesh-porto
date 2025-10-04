import React from 'react'

function ExpirenceCard({h3, title,duriation, description1, description2, description3, description4, technologies,technologiesList}) {
  return (
    <span>
         <h3>{h3},{title}</h3>
         <h4><i>{duriation}</i></h4>
        <p>{description1}</p>
        <p>{description2}</p>
        <p>{description3}</p>
        <p>{description4} </p>
        <h2>{technologies}: {<p>{technologiesList}</p>}</h2>
    </span>    
  ); 
}

export default ExpirenceCard 