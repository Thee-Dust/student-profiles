import React from 'react'
import StudentCard from '../StudentCard/StudentCard'

export default function StudentList({ students }) {
	
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
		<div>
			{studentCards}
		</div>
	)
}
