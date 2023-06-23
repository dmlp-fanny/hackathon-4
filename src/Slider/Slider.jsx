import { useContext, useState } from 'react'
import Context from "../Context";
import './Slider.scss'

export default function Slider () {

    const { context: { width }, dispatch } = useContext(Context)

    const handleChange = (event) => {
        dispatch({
            type: 'width/set',
            payload: event.target.value
        });
    }

    return (
        <form>
        <div className="slidecontainer">
            <input type="range" min="100" max="1000" defaultValue={ width } onChange={ handleChange } step="50" className="slider" />
        </div>
        </form>
    )
}