import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course';

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      },
      {
        name: 'Tiedonvalitys propseilla',
        exercises: 7
      },
      {
        name: 'Kompetenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))