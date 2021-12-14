import React, { useState } from 'react'
import './StudentCard.css'

export default function StudentCard({ id, firstName, lastName, email, studentPic, company, skill, grades }) {
	const [ visable, setVisable ] = useState(false)

	const changeVisability = () => {
		setVisable((prevState) => !prevState)
	}

	const averageScore = () => {
		const sum = grades.reduce((total, score) => total + Number(score), 0)
		const average = sum / grades.length
		return average
	}

	const testScores = grades.map((grade, index) => {
		return(
			<li>Test{index + 1}: {grade}%</li>
		)
	})
	
	return (
		<div id={id} className='student'>
			<img src={studentPic} alt={`${firstName} ${lastName}`}/>
			<div className='student-about'>
				<div className='student-control'>
					<h1 className='student-name'>{firstName} {lastName}</h1>
					{!!visable 
						? <button onClick={changeVisability}><i class="fas fa-minus visability-bttn"></i></button> 
						: <button onClick={changeVisability}><i className="fas fa-plus visability-bttn"></i></button>
					}
				</div>
				<div className='student-info'>
					<ul>
						<li>Email: {email}</li>
						<li>Company: {company}</li>
						<li>Skill: {skill}</li>
						<li>Average: {averageScore()}%</li>
					</ul>
				</div>
				{!!visable && 
					<div className='tests'>
						<ul>
							{testScores}
						</ul>
					</div>
				}
			</div>
		</div>
	)
}
