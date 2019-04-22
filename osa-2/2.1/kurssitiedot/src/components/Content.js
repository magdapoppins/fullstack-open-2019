import React from 'react'
import Part from './Part'

const Content = (props) => {
    const {parts} = props
    return (
        <div>
            {parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises}/>)}
            {/*{parts.map(part => <Part {...part}}/>)} */}
        </div>
    )
}

export default Content