import React, { useState } from 'react'
import StudentCard from '../StudentCard/StudentCard'
import InputForm from '../InputForm/InputForm'
import './StudentList.css'

export default function StudentList({ students }) {
	const [ studentSearched, setStudentSearched ] = useState('');

	if(!!studentSearched) {
		const nameMatchedStudents = students.filter(student => student.firstName.toLowerCase().includes(studentSearched.toLocaleLowerCase()) || student.lastName.toLowerCase().includes(studentSearched.toLocaleLowerCase()))
	
		const searchedStudentCards = nameMatchedStudents.map(student => {
			return(
				<StudentCard
				key={student.id}
				id={student.id}
				firstName={student.firstName}
				lastName={student.lastName}
				email={student.email}
				studentPic={student.pic}
				company={student.company}
				skill={student.skill}
				grades={student.grades}
				/>
			)
		})

		return (
			<div className='student-profiles'>
				<InputForm changeState={setStudentSearched} inputName={'name'} />
				<div className='student-list'>
					{searchedStudentCards}
				</div>
			</div>
		)
	}


	const studentCards = students.map(student => {
		return(
			<StudentCard
			key={student.id}
			id={student.id}
			firstName={student.firstName}
			lastName={student.lastName}
			email={student.email}
			studentPic={student.pic}
			company={student.company}
			skill={student.skill}
			grades={student.grades}
			/>
		)
	})
	
	return (
		<div className='student-profiles'>
			<InputForm changeState={setStudentSearched} inputName={'name'} />
			<div className='student-list'>
				{studentCards}
			</div>
		</div>
	)
}
