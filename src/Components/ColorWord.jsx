import React from 'react'
import { useParams } from 'react-router'

const ColorWord = () => {
    const {word} = useParams()
    const {color1} = useParams()
    const {color2} = useParams()

    const color = {
        color: color1,
        backgroundColor: color2
    }

    return (
        <div>
            <h1 style={color}>{word}</h1>
        </div>
    )
}

export default ColorWord;