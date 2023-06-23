import { useState } from 'react'
import './Slider.scss'

export default function Slider () {
    const [size, setSize] = useState(10)



    return (
        <form>
        <div className="slidecontainer">
            <input type="range" min={0} max={100} value={50} step={1} className="slider" />
        </div>
        </form>
    )
}