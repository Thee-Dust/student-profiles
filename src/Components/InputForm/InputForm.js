import React, { useRef } from 'react'
import './InputForm.css'

export default function InputForm({ changeState, inputName }) {

	const inputRef = useRef()

	const inputSearched = () => {
		changeState(inputRef.current.value)
	}

	return (
		<form className='input-form'>
			<input className='input' ref={inputRef} placeholder={`Search by ${inputName}`} onChange={inputSearched}></input>
		</form>
	)
}
