import React from 'react'

export default function StudentCard({ id, firstName, lastName, email, studentPic, company, skill, grades }) {

	const averageScore = () => {
		const sum = grades.reduce((total, score) => total + Number(score), 0)
		const average = sum / grades.length
		return average
	}
	
	return (
		<div id={id}>
			<img src={studentPic} alt={`${firstName} ${lastName}`}/>
			<div>
				<h2>{firstName} {lastName}</h2>
			</div>
			<div>
				<ul>
					<li>Email: {email}</li>
					<li>Company: {company}</li>
					<li>Skill: {skill}</li>
					<li>Average: {averageScore()}</li>
				</ul>
			</div>
		</div>
	)
}
