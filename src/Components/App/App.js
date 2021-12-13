import React, { useState, useEffect } from 'react'
import getStudents from '../../ApiCalls/ApiCall';
import StudentList from '../StudentList/StudentList';
import './App.css'

export default function App() {
	const [ students, setStudents ] = useState([]);
	const [ error, setError ] = useState('');

	useEffect(() => {
		const fetchStudents = async () => {
			setError('')
			try {
				const studentList = await getStudents();
				setStudents(studentList.students)
			} catch(err) {
				setError(err.message)
			}
		}
		fetchStudents()
	},[])
	

	if(error){
		return (
			<main>
				<h1>{error}</h1>
			</main>
		)
	}
	if(students.length) {
		return (
			<main>
				<StudentList students={students} />
			</main>
		)
	}
	return null
}
