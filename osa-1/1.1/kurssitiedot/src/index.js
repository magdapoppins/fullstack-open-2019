import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  const exercises = [
      exercises1,
      exercises2,
      exercises3
  ]

  const parts = [
      part1,
      part2,
      part3
  ]


  return (
    <div>
        <Header course={course}/>
        <Content parts={parts} exercises={exercises} />
        <Total exerciseCount={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))