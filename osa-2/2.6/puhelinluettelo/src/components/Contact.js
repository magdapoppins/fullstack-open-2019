import React from 'react'

const Contact = (props) => {
    const {name, phoneNr} = props
    
    return (
        <tr>
            <td>{name}</td>
            <td>{phoneNr}</td>
        </tr>
    )
}

export default Contact