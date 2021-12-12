import React, { useState, useEffect } from 'react'
import getStudents from '../../ApiCalls/ApiCall';

export default function App() {
	const [ students, setStudents ] = useState([]);
	const [ error, setError ] = useState('');

	useEffect(() => {
		const fetchStudents = async () => {
			setError('')
			try {
				const studentList = await getStudents();
				setStudents(studentList)
			} catch(err) {
				setError(err.message)
			}
		}
	},[])
	
	return (
		<div>
			
		</div>
	)
}
