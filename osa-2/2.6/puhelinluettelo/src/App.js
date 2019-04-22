import React, { useState } from 'react'
import ContactList from './components/ContactList';
import NewContact from './components/NewContact'

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
      <NewContact newName={newName} 
                  setNewName={setNewName} 
                  newNumber={newNumber} 
                  setNewNumber={setNewNumber}
                  handleNewContactChange={handleNewContactChange}
                  handleNewNumberChange={handleNewNumberChange}
                  addContact={addContact}/>
      <h2>Numerot</h2>
      <ContactList contacts={persons} />
    </div>
  )
}

export default App