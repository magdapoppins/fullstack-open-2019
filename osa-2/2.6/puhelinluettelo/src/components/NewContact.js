import React from 'react'

const NewContact = (props) => {
    return (
        <form onSubmit={props.addContact}>
        <div>
          nimi: <input 
            value={props.newName}
            onChange={props.handleNewContactChange} />
          <br />
          numero: <input 
            value={props.newNumber}
            onChange={props.handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}

export default NewContact