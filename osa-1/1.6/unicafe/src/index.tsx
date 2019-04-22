import React, { useState } from 'react'
import ReactDOM, { render } from 'react-dom'

const Button = (props: any) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props: any) => (
    <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
)

const Statistics = (props: any) => {
    const {good, neutral, bad} = props
    const sum = good + neutral + bad
    const mean = (good - bad)/(good + bad + neutral)
    const positive = (good/(good + bad + neutral))*100
    if (sum != 0){
        return(
            <tbody>
                <Statistic text="Yhteensä" value={sum} />
                <Statistic text="Keskiarvo" value={mean} />
                <Statistic text="Positiiviset" value={positive} />
            </tbody>
        )
    } else {
        return(
            <tbody>
                <tr>
                    <td>Ei palautetta annettu</td>
                </tr>
            </tbody>
        )
    }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let feedbackGiven = false;

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali"/>
      <Button handleClick={() => setBad(bad + 1)} text="huono"/>
      <h1>statistiikka</h1>
      <table>
        <tbody>
            <tr>
                <td>Hyvä</td>
                <td>{good}</td>
            </tr>
            <tr>
                <td>Neutraali</td>
                <td>{neutral}</td>
            </tr>
            <tr>
                <td>Huono</td>
                <td>{bad}</td>
            </tr>
        </tbody>
        <Statistics good={good} neutral={neutral} bad={bad} feedbackGiven={feedbackGiven} />
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
