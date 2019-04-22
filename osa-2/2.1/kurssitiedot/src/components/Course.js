import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts} />
            <Total exerciseCount={props.course.parts.reduce((count, part) => count + part.exercises, 0)}/>
        </div>
    )
}

export default Course