import { useState } from 'react'
import './Slider.scss'

export default function Slider () {
    const [size, setSize] = useState(10)



    return (
        <form>
        <div className="slidecontainer">
            <input type="range" min="1" max="100" value="50" className="slider" />
        </div>
        </form>
    )
}