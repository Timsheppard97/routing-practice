import React from 'react'
import { useParams } from 'react-router'

const Number = () => {
    const {input} = useParams();
    const word = useParams();

    return (
        <div>
            <h1>{!isNaN(input) ? "The number is" + input : "Clint is a " + input}</h1>
        </div>
    )
}

export default Number;