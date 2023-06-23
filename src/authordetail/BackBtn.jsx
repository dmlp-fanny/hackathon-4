import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Back() {

    const navigate = useNavigate()

    return (
        <button onClick={()=>navigate(-1)}>Back</button>
    )
}