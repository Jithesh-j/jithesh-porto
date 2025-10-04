import React from 'react'

function EducationList({CollegeName, degree,duriation}) {
  return (
    <span>
        <h2>{CollegeName}, <h3>{degree}</h3></h2>
        <i>{duriation}</i>
    </span>
  );
}

export default EducationList