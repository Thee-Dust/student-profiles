import React from 'react'
import './StudentCard.css'

export default function StudentCard({ id, firstName, lastName, email, studentPic, company, skill, grades }) {

	const averageScore = () => {
		const sum = grades.reduce((total, score) => total + Number(score), 0)
		const average = sum / grades.length
		return average
	}
	
	return (
		<div id={id} className='student'>
			<img src={studentPic} alt={`${firstName} ${lastName}`}/>
			<div className='student-about'>
				<div>
					<h1 className='student-name'>{firstName} {lastName}</h1>
				</div>
				<div className='student-info'>
					<ul>
						<li>Email: {email}</li>
						<li>Company: {company}</li>
						<li>Skill: {skill}</li>
						<li>Average: {averageScore()}%</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
