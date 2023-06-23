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
            <input type="range" min="10" max="100" defaultValue={ width } onChange={ handleChange } step="2" className="slider" />
        </div>
        </form>
    )
}