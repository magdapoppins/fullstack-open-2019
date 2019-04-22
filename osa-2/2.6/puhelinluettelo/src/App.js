import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Asd 1' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const newContactObject = {
      name: newName
    }
    setPersons(persons.concat(newContactObject))
  } 

  const handleNewContactChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addContact}>
        <div>
          nimi: <input 
            value={newName}
            onChange={handleNewContactChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App