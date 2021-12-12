export default async function getStudents() {
	try {
		const response = await fetch('https://api.hatchways.io/assessment/students');
		const students = apiCheck(response);
		return students
	} catch(e) {
		throw Error('Students not found')
	}
}

const apiCheck = (response) => {
	if(response.ok) {
		return response.json()
	}
	apiStatusCheck(response.status)
}

const apiStatusCheck = (status) => {
	if (status === 404) {
    throw Error("Sorry, page not found!");
  }
  if (status === 500) {
    throw Error("Sorry, this page isn't working!");
  }
  throw Error("Sorry, something went wrong!");
}