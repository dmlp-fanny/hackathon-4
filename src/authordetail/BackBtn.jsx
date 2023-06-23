import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './BackBtn.scss'


export default function BackBtn() {

    const navigate = useNavigate()

    return (
        <button className="backBtn" onClick={()=>navigate(-1)}>Back</button>
    )
}