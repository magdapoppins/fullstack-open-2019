import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Asd Yasd',
      phoneNr: '921 653 321'
    }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`person already exists: ${newName}`)
    } else {
      const newContactObject = {
        name: newName,
        phoneNr: newNumber
      }
      setPersons(persons.concat(newContactObject))
    }
  } 

  const handleNewContactChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addContact}>
        <div>
          nimi: <input 
            value={newName}
            onChange={handleNewContactChange} />
          <br />
          numero: <input 
            value={newNumber}
            onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}, {person.phoneNr}</li>)}
      </ul>
    </div>
  )
}

export default App