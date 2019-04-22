import React from 'react'
import Contact from './Contact';

const ContactList = (props) => {
    return (
        <table>
            <thead>
                <th>Nimi</th>
                <th>Numero</th>
            </thead>
            <tbody>
                {props.contacts.map(contact => <Contact name={contact.name} phoneNr={contact.phoneNr} />)}
            </tbody>
        </table>
    )
}

export default ContactList