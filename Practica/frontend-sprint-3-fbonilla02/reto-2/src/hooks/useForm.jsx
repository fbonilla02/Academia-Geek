import { useState } from "react"

export const useForm = (initialState={})=>{
    const [formValue, setFormValue] = useState(initialState)
    
    const handleInputChange = ({target})=>{
        setFormValue({
            ...formValue,
            [target.name]: target.value,
        })
    }
    const rest = ()=>{
        setFormValue(initialState)
    }
    return [formValue, handleInputChange, rest]
}