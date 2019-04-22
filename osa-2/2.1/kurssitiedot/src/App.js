import React from 'react'
import Course from './components/Course';

const App = () => {
    const courses = [
        {
          name: 'Half Stack -sovelluskehitys',
          parts: [{
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          }]
        },
        {
          name: 'Three-Quarters Stack -sovelluskehitys',
          parts: [{
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          }]
        },
    ]
  
    return (
      <>
        <h1>Opetusohjelma</h1>
        {courses.map(course => <Course key={course.name} course={course} />)}
      </>
    )
}

export default App